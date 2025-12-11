import type { Metadata } from "next";
import PDFViewer from "../components/PDFViewerClient";
import FadeInSection from "../components/FadeInSection";

export const metadata: Metadata = {
  title: "Portfolio - Grant Eadie",
  description: "View Grant Eadie's portfolio and work samples",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] dark:bg-[#1a1a2e]">
      <section className="px-2 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 pb-24 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
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
