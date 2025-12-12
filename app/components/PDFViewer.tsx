'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  pdfPath: string;
  initialPage?: number;
  showPageNumbers?: boolean;
  enableKeyboardNav?: boolean;
  showZoomControls?: boolean;
  showDownloadButton?: boolean;
  className?: string;
}

export default function PDFViewer({
  pdfPath,
  initialPage = 1,
  showPageNumbers = true,
  enableKeyboardNav = true,
  showZoomControls = true,
  showDownloadButton = true,
  className = '',
}: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [prevPage, setPrevPage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1.0);
  const [pageWidth, setPageWidth] = useState<number>(600);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const pdfContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);
  const pageContainerRef = useRef<HTMLDivElement>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    setError('Failed to load PDF. Please try again.');
    setIsLoading(false);
    console.error('PDF Load Error:', error);
  };

  // Smooth crossfade transition between pages
  const changePageWithTransition = useCallback((newPage: number) => {
    if (isTransitioning || newPage === currentPage) return;

    // Save current scroll position
    scrollPositionRef.current = window.scrollY;

    // Set previous page for crossfade
    setPrevPage(currentPage);

    // Start transition
    setIsTransitioning(true);

    // Update to new page immediately (will render behind at opacity 0)
    setCurrentPage(newPage);

    // After a brief moment to let new page render, start crossfade
    requestAnimationFrame(() => {
      // Restore scroll position
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'instant' as ScrollBehavior,
      });

      // End transition (triggers crossfade via CSS)
      setTimeout(() => {
        setIsTransitioning(false);

        // Clean up previous page after transition completes
        setTimeout(() => {
          setPrevPage(null);
        }, 200); // Match CSS transition duration
      }, 50);
    });
  }, [currentPage, isTransitioning]);

  const goToPreviousPage = useCallback(() => {
    const newPage = Math.max(1, currentPage - 1);
    if (newPage !== currentPage) {
      changePageWithTransition(newPage);
    }
  }, [currentPage, changePageWithTransition]);

  const goToNextPage = useCallback(() => {
    const newPage = Math.min(numPages || 1, currentPage + 1);
    if (newPage !== currentPage) {
      changePageWithTransition(newPage);
    }
  }, [currentPage, numPages, changePageWithTransition]);

  const goToFirstPage = useCallback(() => {
    changePageWithTransition(1);
  }, [changePageWithTransition]);

  const goToLastPage = useCallback(() => {
    if (numPages) changePageWithTransition(numPages);
  }, [numPages, changePageWithTransition]);

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.2, 3.0));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  }, []);

  const resetZoom = useCallback(() => {
    setScale(1.0);
  }, []);

  const downloadPDF = useCallback(() => {
    const link = document.createElement('a');
    link.href = `/${pdfPath}`;
    link.download = pdfPath.split('/').pop() || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [pdfPath]);

  useEffect(() => {
    if (!enableKeyboardNav) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault();
          goToPreviousPage();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault();
          goToNextPage();
          break;
        case 'Home':
          e.preventDefault();
          goToFirstPage();
          break;
        case 'End':
          e.preventDefault();
          goToLastPage();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [enableKeyboardNav, goToPreviousPage, goToNextPage, goToFirstPage, goToLastPage]);

  // Touch gesture handlers for swipe navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const swipeThreshold = 50; // Minimum swipe distance in pixels
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - go to next page
        goToNextPage();
      } else {
        // Swiped right - go to previous page
        goToPreviousPage();
      }
    }
  }, [goToNextPage, goToPreviousPage]);

  useEffect(() => {
    const updateWidth = () => {
      // More aggressive padding reduction on mobile
      const isMobile = window.innerWidth < 640;
      const padding = isMobile ? 32 : 64;
      const containerWidth = Math.min(window.innerWidth - padding, 900);
      setPageWidth(containerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className={`flex flex-col items-center gap-4 sm:gap-6 pb-4 ${className}`}>
      {/* Zoom Controls */}
      {showZoomControls && !error && (
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="min-h-12 min-w-12 sm:min-h-10 sm:min-w-10 px-3 py-3 sm:px-4 sm:py-2 rounded-full bg-[#3E5AAD]/20 dark:bg-[#F5F5DC]/20 border-2 border-[#3E5AAD] dark:border-[#F5F5DC] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 hover:scale-105 disabled:hover:scale-100"
            aria-label="Zoom out"
          >
            <svg
              className="w-5 h-5 sm:w-5 sm:h-5 text-[#3E5AAD] dark:text-[#F5F5DC]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>

          <button
            onClick={resetZoom}
            className="min-h-12 sm:min-h-10 px-4 py-3 sm:py-2 rounded-full bg-[#3E5AAD]/20 dark:bg-[#F5F5DC]/20 border-2 border-[#3E5AAD] dark:border-[#F5F5DC] transition-all duration-300 active:scale-95 hover:scale-105 font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-[#3E5AAD] dark:text-[#F5F5DC]"
            aria-label="Reset zoom"
          >
            {Math.round(scale * 100)}%
          </button>

          <button
            onClick={zoomIn}
            disabled={scale >= 3.0}
            className="min-h-12 min-w-12 sm:min-h-10 sm:min-w-10 px-3 py-3 sm:px-4 sm:py-2 rounded-full bg-[#3E5AAD]/20 dark:bg-[#F5F5DC]/20 border-2 border-[#3E5AAD] dark:border-[#F5F5DC] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 hover:scale-105 disabled:hover:scale-100"
            aria-label="Zoom in"
          >
            <svg
              className="w-5 h-5 sm:w-5 sm:h-5 text-[#3E5AAD] dark:text-[#F5F5DC]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      )}

      {/* PDF Document Container with Touch Support */}
      <div
        ref={pdfContainerRef}
        className="relative w-full max-w-4xl touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isLoading && (
          <div className="flex items-center justify-center h-96 bg-[#E8E6D9] dark:bg-[#0f0f1e] rounded-lg border-2 border-[#3E5AAD]/20 dark:border-[#F5F5DC]/20">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-[#3E5AAD] dark:border-[#F5F5DC] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="font-[family-name:var(--font-dm-sans)] text-[#3E5AAD] dark:text-[#F5F5DC]">
                Loading PDF...
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center h-96 bg-[#E8E6D9] dark:bg-[#0f0f1e] rounded-lg border-2 border-red-500/50">
            <div className="text-center px-4">
              <p className="font-[family-name:var(--font-dm-sans)] text-red-600 dark:text-red-400 text-lg">
                {error}
              </p>
            </div>
          </div>
        )}

        <Document
          file={`/${pdfPath}`}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          className="flex justify-center"
          loading=""
        >
          <div
            ref={pageContainerRef}
            className="relative shadow-lg sm:shadow-2xl rounded-lg overflow-hidden border-2 border-[#3E5AAD]/20 dark:border-[#F5F5DC]/20 bg-white dark:bg-gray-800"
          >
            {/* Previous page - fading out */}
            {prevPage !== null && (
              <div
                className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${
                  isTransitioning ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ zIndex: 1 }}
              >
                <Page
                  pageNumber={prevPage}
                  width={pageWidth}
                  scale={scale}
                  loading={<div className="h-0"></div>}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            )}

            {/* Current page - fading in */}
            <div
              className={`transition-opacity duration-200 ease-in-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ zIndex: 2, position: 'relative' }}
            >
              <Page
                pageNumber={currentPage}
                width={pageWidth}
                scale={scale}
                loading={<div className="h-0"></div>}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </div>
          </div>
        </Document>
      </div>

      {/* Navigation Controls - Sticky on Mobile */}
      {!error && numPages && (
        <div className="w-full max-w-4xl sm:max-w-none flex flex-row items-center justify-center gap-3 sm:gap-6 sticky sm:static bottom-4 sm:bottom-auto bg-[#F5F5DC]/95 dark:bg-[#1a1a2e]/95 sm:bg-transparent dark:sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none px-4 py-3 sm:px-0 sm:py-0 rounded-full sm:rounded-none shadow-lg sm:shadow-none z-10">
          {/* Previous Button */}
          <button
            onClick={goToPreviousPage}
            disabled={currentPage <= 1 || isTransitioning}
            className="group min-h-12 min-w-12 sm:min-h-0 sm:min-w-0 flex items-center justify-center px-3 py-3 sm:px-6 sm:py-3 rounded-full bg-[#3E5AAD]/20 dark:bg-[#F5F5DC]/20 border-2 border-[#3E5AAD] dark:border-[#F5F5DC] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 hover:scale-105 disabled:hover:scale-100"
            aria-label="Previous page"
          >
            <svg
              className="w-6 h-6 sm:w-6 sm:h-6 text-[#3E5AAD] dark:text-[#F5F5DC]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Indicator */}
          {showPageNumbers && (
            <div className={`font-[family-name:var(--font-dm-sans)] text-base sm:text-base font-semibold text-[#3E5AAD] dark:text-[#F5F5DC] min-w-[100px] sm:min-w-[120px] text-center transition-opacity duration-200 ${
              isTransitioning ? 'opacity-50' : 'opacity-100'
            }`}>
              <span className="hidden sm:inline">Page </span>{currentPage} <span className="text-[#3E5AAD]/60 dark:text-[#F5F5DC]/60">/</span> {numPages}
            </div>
          )}

          {/* Next Button */}
          <button
            onClick={goToNextPage}
            disabled={currentPage >= numPages || isTransitioning}
            className="group min-h-12 min-w-12 sm:min-h-0 sm:min-w-0 flex items-center justify-center px-3 py-3 sm:px-6 sm:py-3 rounded-full bg-[#3E5AAD]/20 dark:bg-[#F5F5DC]/20 border-2 border-[#3E5AAD] dark:border-[#F5F5DC] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 hover:scale-105 disabled:hover:scale-100"
            aria-label="Next page"
          >
            <svg
              className="w-6 h-6 sm:w-6 sm:h-6 text-[#3E5AAD] dark:text-[#F5F5DC]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Download Button */}
      {showDownloadButton && !error && (
        <button
          onClick={downloadPDF}
          className="min-h-12 sm:min-h-0 px-6 py-3 rounded-full bg-[#3E5AAD] dark:bg-[#F5F5DC] text-[#F5F5DC] dark:text-[#3E5AAD] font-[family-name:var(--font-dm-sans)] font-semibold transition-all duration-300 active:scale-95 hover:scale-105 flex items-center gap-2 text-base"
          aria-label="Download PDF"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="hidden sm:inline">Download PDF</span>
          <span className="sm:hidden">Download</span>
        </button>
      )}

      {/* Keyboard Shortcuts Help Text - Hidden on Mobile */}
      {enableKeyboardNav && !error && (
        <p className="hidden sm:block font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm text-[#3E5AAD]/60 dark:text-[#F5F5DC]/60 text-center">
          Use arrow keys to navigate • Home/End for first/last page
        </p>
      )}

      {/* Mobile Swipe Hint - Only Visible on Mobile */}
      {!error && numPages && (
        <p className="sm:hidden font-[family-name:var(--font-dm-sans)] text-xs text-[#3E5AAD]/60 dark:text-[#F5F5DC]/60 text-center px-4">
          Swipe left or right to navigate pages
        </p>
      )}
    </div>
  );
}
