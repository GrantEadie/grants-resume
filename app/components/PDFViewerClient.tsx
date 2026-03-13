'use client';

import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("./PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#2A09F3] dark:border-[#FFFFFF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="font-[family-name:var(--font-dm-sans)] text-[#2A09F3] dark:text-[#FFFFFF]">
          Loading PDF Viewer...
        </p>
      </div>
    </div>
  ),
});

export default PDFViewer;
