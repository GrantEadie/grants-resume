import type { Metadata } from "next";
import Link from "next/link";
import PDFViewer from "../components/PDFViewerClient";
import FadeInSection from "../components/FadeInSection";
import ThemeToggle from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: "Portfolio - Grant Eadie",
  description: "View Grant Eadie's portfolio and work samples",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] dark:bg-[#1a1a2e]">
      <ThemeToggle />

      <section className="px-2 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 pb-24 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="mb-6 sm:mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-sm sm:text-base font-semibold text-[#3E5AAD] dark:text-[#F5F5DC] hover:underline underline-offset-4 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
            </div>
            <h1 className="font-[family-name:var(--font-loram)] text-4xl sm:text-5xl md:text-6xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-6 sm:mb-12 text-center px-2">
              Portfolio
            </h1>
          </FadeInSection>

          <FadeInSection delay={100}>
            <PDFViewer
              pdfPath="Grant Eadie Portfolio (export web).pdf"
              initialPage={1}
              showPageNumbers={true}
              enableKeyboardNav={true}
              showZoomControls={true}
              showDownloadButton={true}
            />
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
