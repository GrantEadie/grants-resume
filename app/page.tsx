import ThemeToggle from "./components/ThemeToggle";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] dark:bg-[#1a1a2e]">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Decorative Shape */}
        <div className="absolute -right-12 top-1/3 sm:right-4 md:right-12 lg:right-20 opacity-15 sm:opacity-25 pointer-events-none">
          <svg
            width="300"
            height="300"
            viewBox="0 0 128 128"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 fill-[#3E5AAD] dark:fill-[#F5F5DC] rotate-12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M112.86,80.021v-0.308h-0.308v-0.615h-0.308V78.79h-0.308v-0.615h-0.615v-0.308h-0.308V77.56h-0.308v-0.308h-0.615v-0.308h-0.308v0.308h-0.923v0.308h-0.923v0.615h-0.615v0.615h-0.308v0.308h-0.615v0.923h-0.308v0.308h-0.923v0.308h-0.308v0.308h-0.615v-0.308h-0.308v-0.923h-0.308v-0.308h0.308v-1.231h-0.308v-0.308h-0.308v-0.923h-0.615v-0.308h-0.615v-0.308h-0.615v-0.308h-0.615v-0.308h-0.615v-0.308h-1.231v0.308h-1.231v0.308h-0.308v-0.308h-0.308v0.308H96.86v0.308h-0.615v0.308H95.63v0.308h-0.615v0.308h-0.308v0.308h-0.615v0.615h-0.615v0.308h-0.308v0.308H92.86v0.308h-0.615v0.615h-0.308v-0.308h-0.923v-0.308h-0.615v-1.231h-0.615V77.56h-0.615v-0.308h-0.615v-0.308h-0.615v-0.615H87.63v-0.308h-0.615v-0.308h-0.615v-0.308h-1.231v-0.308h-0.923v0.308h-1.846v0.308H80.86v0.308h-0.923v0.308h-1.231v0.308h-0.923v0.308h-0.308v-0.308h-0.308v-0.308h-0.615v-0.308h-0.308v-0.308h-0.308v-0.615h0.308v-0.615h-0.308v-0.615h0.308V73.56h-0.308v-0.923H75.63v-2.769h0.308v-0.615h0.923v-0.308h1.538v0.308h0.308v-0.308h0.308v0.308h0.615v0.308h0.308v-0.308h0.308v0.308h1.846v0.308h0.308V69.56h0.308v-0.308h1.231v-0.308h0.308v-0.308h0.308v-0.615h0.308v0.308h0.308v-0.308h0.308v-0.308h0.308v-0.308h0.615v-0.308h1.231V66.79h0.615v-0.308h0.308v0.308h0.615v-0.615h0.308v0.308h0.923v0.308h0.308v-0.308h0.308v0.308h0.615v0.308h0.923v0.308h0.615v0.308h0.308v0.308h0.615v0.308h0.615v0.308h0.923v0.308h0.308v0.308h0.615v0.308h1.231v0.308h0.308V69.56h1.231v-0.308h0.308v0.308h0.615v-0.308h0.615v-0.308h0.308v-0.308h0.615v-0.308h0.923v-0.308h0.923v-0.308h-0.308v-0.308h0.615v-0.308h0.308V66.79h0.615v-0.308h0.308v-0.308h0.308V65.56h0.308v-0.308h0.308v-0.308h0.615v-0.308h0.308v-0.308h0.615v-0.308h0.308v-0.615h0.615v-0.308h0.308V62.79h-0.308v-0.615h0.308v-1.231h-0.308v-0.308h0.308v-0.308h-0.308v-0.308h-0.308v-0.615h-0.308v-0.308h-0.923V58.79h-2.154v0.308h-0.615v0.308h-0.923v0.308h-0.615v0.308h-0.308v0.308h-0.308v-0.308h-0.308v-0.923h0.308V58.79h-0.308v-0.615h-0.308v-0.308h-0.308V57.56h-0.308v-0.308h-0.308v-0.308h-0.308v-0.615H99.63v-0.308h-1.231v-0.308h-0.923v-0.308h-0.308v0.308H96.86v-0.308h-0.308v0.308H95.63v0.308h-1.538v0.308h-0.615v0.308H92.86v0.308h-1.538v0.308h-0.923v0.308h-0.923v-0.308h-0.308v0.615h-1.846V57.56h-0.615v-0.308h-1.231v-0.308h-0.923v-0.615H83.63v-0.308h-0.615v-0.308h-0.308v-0.308h-0.615v-0.308h-0.308V54.79h-1.231v-0.308h-0.615v0.308h-1.231v-0.308h-1.231v0.308h-1.231v0.308h-0.308v0.308h-0.923v-0.308h-0.308v0.308h-0.615v0.308h-0.615v-0.308h-0.923V54.79h-0.615v-0.308h-0.615V53.56h-0.308v-0.615h0.615v-0.308h0.615v-0.308h0.923v-0.308h0.615v-0.308h0.308v-0.308h0.923V50.79h0.615v0.308h0.308v-0.615h0.308v-0.308h0.308v-0.308h0.308V49.56h0.308v-0.615h0.308v-0.615h0.308v-3.385h-0.308v-0.308h0.308v-0.923h-0.308V42.79h-0.308v-0.308H76.86V41.56h-0.615v-0.615h-0.308v-0.308h-0.615v-0.615h-0.615v-0.308h-0.308v-0.308h-0.615v-0.308h-0.615V38.79h-0.615v-0.615h-0.615v0.308H71.63v-0.308h-0.615v-0.308h-0.615V37.56h-0.923v-0.308h-1.231v-0.308h-1.231v-0.308h-0.308v0.308h-0.308v-0.308h-3.077v0.308h-1.538v0.308h-0.615v0.308h-0.615v0.308h-0.615v0.308H59.63v0.308h-0.308v0.308h-0.615v0.615h-0.308v0.308h-0.308v0.308h-0.308v0.308h-0.308v0.308h-0.308v0.615H56.86v0.308h-0.308v0.923h-0.615v0.308h0.308v0.308h0.308v0.308h-0.308v0.308h-0.308v0.308h0.308v0.615h0.308v0.308h-0.308v0.615h0.308v1.538h0.308v0.615h0.308v0.308h0.308v0.615h0.308v0.615h0.308v0.308h0.308v0.308h0.308v0.615h0.308v0.923h0.308v0.615h-0.308v0.308h-0.308v0.308h-0.923v-0.308h-0.308v0.308H56.86v0.308h-2.154v-0.308h-0.308v0.308h-0.308v-0.615h-0.308v0.308h-0.308v-0.615h-0.923v-0.308h-0.308v0.308h-0.308v-0.308h-0.615v-0.308h-0.308v0.308h-0.308v-0.308h-0.923v0.308h-0.308v-0.308H48.86v0.308h-0.615v0.308h-0.308v-0.308H47.63v0.308h-0.615v0.308h-0.615v0.308h-0.615v0.308h-0.308v0.308h-0.308v0.308H44.86v0.308h-0.615v0.308h-0.923v0.308h-0.615v0.308h-0.615v0.308h-0.923v0.308H40.86v-0.308h-0.308V54.79h-1.538v-0.308h-0.923v-0.308h-0.615v-0.308h-0.308v0.308H36.86V53.56h-0.615v-0.308H35.63v-0.308h-1.231v-0.308h-0.308v-0.308h-1.538v-0.308h-1.231v0.308h-0.308v-0.308h-0.615v-0.308h-0.308v0.308h-0.923v-0.308h-0.923v0.308h-1.538v0.308h-1.538v0.308H24.86v0.308h-0.308v-0.308h-0.308v0.308h-0.923v0.308h-0.308v0.308h-0.615v0.308h-0.308v0.308h-0.615v0.308h-0.308v0.308h-0.923v0.308h-0.923v0.308h-0.308v0.308h-0.615v0.308h-0.308v0.308h-0.308v0.308h-0.308v0.308H16.86v0.308h-0.308v0.615h-0.615v1.846h0.308v1.231h0.615v0.308h0.308v0.615h0.308v0.308h-0.308v0.308h1.846v0.308h0.923v-0.308h0.615v-0.308h0.923v-0.308h0.308V61.56h0.615v-0.308h0.308v-0.308h0.308v-0.308h0.308v0.308h0.615v0.308h-0.615v1.846h-0.308v1.231h0.308v1.231h1.231v0.308h0.923v0.308h0.615v-0.308h0.923V65.56h0.615v-0.308h0.308v-0.308h0.923v-0.308h0.308v-0.308h1.231v-0.308h0.308v0.308h0.923v0.308h0.308v-0.308h0.923v0.308h1.231v0.308h0.615v0.308h0.615v0.308h0.308v0.308h1.538v0.308h1.231v0.308h1.231v0.308h0.308v-0.308h0.615v-0.308h0.923v-0.308h0.923V65.56h0.923v-0.308h0.615v-0.308h0.615v-0.308h0.923v-0.308h0.615v-0.308h0.615v-0.308h0.308v0.308h0.308v-0.308h0.615v-0.308h0.923v0.308h1.231v0.308h0.308v0.308h0.923v0.308h0.308v0.615h0.615v0.308h0.615v0.308h0.615v0.308h0.308v0.308h0.923v0.308h0.923v0.308h0.615v0.308h0.615v-0.308h0.308v0.308h0.308v0.308h0.308v-0.308h0.615v0.615h0.615v0.615h0.308v0.308h-0.308v0.308h0.308v0.615h0.308v0.308h-0.308v0.615h0.308v0.615h-0.615v0.615h0.308v0.308h-0.308v0.308h-0.308v0.923h-0.308v0.923h-0.308v1.231h-0.308v1.231h-0.308v0.308h-0.308v0.308h0.308v0.308H56.86v0.308h-0.308v0.308h-0.615v0.308h-0.615v-0.308h-0.615v-0.308h-1.231V77.56h-1.231v-0.308h-0.308v-0.308h-1.538v-0.308h-0.308v-0.308h-0.308v0.308h-0.308v-0.308h-1.538v0.308h-0.615v-0.308h-0.615v0.308h-0.308v-0.308h-0.308v0.308h-0.615v0.308h-0.923v0.308h-0.308v0.308h-0.923v0.615h-0.308v-0.308h-0.308v0.308h-1.231v0.308h-0.308v-0.308h-0.923v-0.308h-0.308V77.56H39.63v0.308h-0.308V77.56h-0.615v-0.308h-0.308v-0.308h-0.923v-0.308h-0.923v-0.308H35.63v-0.308h-1.846v-0.308h-0.615v0.308H32.86v-0.308h-0.308v0.308h-1.538v0.308h-1.231v0.308h-0.308v0.308H28.86v0.308h-0.615v0.615h-0.923v0.308h-0.308v0.308h-0.308v0.308h-0.615v0.308h-0.308V78.79h-0.308v0.308h-0.308v0.308h-0.615v0.615h-0.308v1.231h-0.308v0.615h-1.231v-0.615h-0.308v-0.308h-0.308v-0.923h-0.308v-0.615h-0.308v-0.308h0.308V78.79h-0.308V77.56h-0.308v-0.615H20.86v-0.308h-0.308v-0.615h-0.615v-0.308h-0.923v-0.308h-0.615v-0.308h-2.154v0.308h-0.923v0.308h-0.615v0.308h-0.308v0.615h-0.308v0.308h-0.308v0.308h-0.308v0.615h-0.308v2.154H12.86v0.615h0.308v0.923H12.86v0.308h0.308v0.923h0.308v0.308h-0.308v0.308h0.308v1.538h0.615v1.231h0.308v0.308h0.308v0.923h0.615v0.615h0.615v0.308h0.308v0.308h0.308v0.615h0.308v0.308h0.308v0.308h0.308v0.308h0.308v0.308h0.308v0.308h1.231v0.308h1.538v0.308h3.385v-0.308h1.231V90.79h0.923v-0.308h0.308v-0.308h0.615v-0.308h0.308V89.56h0.308v-0.308h0.615v-0.308h0.308v0.308h1.538v0.615h0.615v0.308h0.308v0.308h0.308v0.308h0.308v0.308h0.923v0.308h0.615v0.308h0.615v-0.308h0.308v0.308h0.615v0.308h0.308v-0.308h0.615v0.308h0.308v-0.308h0.308v-0.308h0.308v-0.308h0.615V90.79h0.308v-0.308h0.923v-0.308h0.308V89.56h0.308v-0.308h1.231v-0.308h0.615v-0.308h1.231v0.308h0.615v0.308h0.615v0.308h0.308v0.308h0.615v0.308h1.231v0.308h0.308v0.308h0.308v-0.308h0.923v-0.308h0.615v-0.308h0.923V89.56h0.615v-0.308h0.615v-0.308h0.615v-0.615h0.308v-0.308h0.923v-0.923h0.308v0.615h1.846v0.308h0.923v0.615h0.308v0.308h0.615v0.308h0.308v0.308h0.308v0.615h0.308v0.308h0.923v0.308h0.308v0.308h0.308v0.308h1.231v0.308h0.615v0.308h0.615v0.308h0.615v-0.308h0.615v-0.308h0.923v-0.308h0.308v-0.308h0.615V90.79h0.615v-0.308h0.308v-0.308h0.615v-0.308h0.308V89.56h0.308v-0.308h0.615v-0.308h0.308v-0.308h0.615v-0.615h0.615v-0.308h0.615v-0.308h0.308v-0.308h0.923V86.79h1.231v-0.308h0.308v0.308h0.615v-0.308h0.923v-0.308h0.308v0.308h0.615v-0.308h0.923v0.308h0.923v0.308h1.846v0.308h0.615v0.308h0.308v0.308h0.615v0.308h0.615v0.308h0.308v-0.308h0.308v0.615h0.308v0.308h0.923v0.308h1.231v0.308h0.923v0.308h0.923v0.308h0.615v-0.308h0.308v0.308h1.538v0.308h0.923v-0.308h2.154v-0.308h1.231V89.56h0.308v-0.308h0.615v-0.615h0.308v-0.308h0.615v-0.308h0.308v-0.308h0.923v-0.308h1.538v0.308h0.308v-0.308h0.923v-0.308h0.308v0.308h0.615v0.308h0.615v-0.308h0.308v0.308h0.615v0.308h1.538v0.308h1.538v0.308h0.308v-0.308h0.308v0.308h2.154v0.308h0.308v-0.308h1.231v-0.308h0.308v-0.308h0.923v-0.615h0.308v-0.308h0.308V86.79h0.308v-0.308h0.615v-0.308h0.308v-0.308h0.308V85.56h0.308v-0.308h0.308v-0.308h0.615v-0.615h-0.308v-0.308h0.615v-0.923h0.308v-0.923h0.308v-1.231h-0.308v-0.923H112.86z" />
          </svg>
        </div>

        <div className="max-w-5xl w-full mx-auto relative z-10">
          <FadeInSection>
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="font-[family-name:var(--font-loram)] text-[16vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] leading-[0.9] tracking-tight">
                  <span className="block sm:inline">Grant</span>{" "}
                  <span className="block sm:inline">Eadie</span>
                </h1>
                <h3 className="font-[family-name:var(--font-loram)] text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold [-webkit-text-stroke:1px_#3E5AAD] dark:[-webkit-text-stroke:1px_#F5F5DC] [-webkit-text-fill-color:transparent] tracking-wide">
                  Web Dev | Designer | Etc
                </h3>
              </div>

              <div className="h-px w-16 sm:w-24 bg-[#3E5AAD] dark:bg-[#F5F5DC]"></div>

              <div className="max-w-2xl">
                <p className="font-[family-name:var(--font-dm-sans)] text-lg sm:text-xl md:text-2xl text-[#3E5AAD]/90 dark:text-[#F5F5DC]/90 leading-relaxed">
                  Hi, I'm Grant, a developer and designer pulled toward work that
                  weaves technology into the fabric of community. I build tools
                  that help organizations articulate their purpose, and I'm guided
                  by a conviction that we can cultivate a deeper harmony between
                  human life and the living world we inhabit.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-[#E8E6D9] dark:bg-[#0f0f1e]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="font-[family-name:var(--font-loram)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-8 sm:mb-12 md:mb-16">
              Work
            </h2>
          </FadeInSection>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Timeline Item 2 */}
            <FadeInSection delay={100}>
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#3E5AAD]/30 dark:border-[#F5F5DC]/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#3E5AAD] dark:bg-[#F5F5DC]"></div>
              <div className="mb-1 sm:mb-2">
                <span className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm font-semibold text-[#3E5AAD]/70 dark:text-[#F5F5DC]/70">
                  2023 - Present
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-1 sm:mb-2 leading-tight">
                TwispWorks Foundation 501(c)(3)
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] italic text-sm sm:text-base text-[#3E5AAD]/80 dark:text-[#F5F5DC]/80 mb-3">
                Communications Officer
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#3E5AAD] dark:text-[#F5F5DC] leading-relaxed list-disc space-y-1.5 marker:text-[8px] marker:text-[#3E5AAD]/50 dark:marker:text-[#F5F5DC]/50">
                <li>
                  Rebuilt organization's website using WordPress and custom
                  development for a 6.4-acre campus housing 35+ businesses.
                </li>
                <li>
                  Designed and developed an interactive campus map with
                  real-time navigation functionality.
                </li>
                <li>
                  Create visual assets and manage content strategy across
                  fundraising campaigns, web, and social platforms.
                </li>
                <li>
                  Lead promotional initiatives and manage audience and donor
                  engagement through email, direct mail, website, and various
                  outreach tools and initiatives.
                </li>
              </ul>
              <a
                href="https://twispworks.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-dm-sans)] inline-flex items-center gap-1.5 mt-3 text-sm sm:text-base font-semibold text-[#3E5AAD] dark:text-[#F5F5DC] underline underline-offset-4 decoration-1 hover:underline-offset-8 hover:decoration-2 transition-all duration-300 group"
              >
                check it out
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
            </FadeInSection>

            {/* Timeline Item 3 */}
            <FadeInSection delay={200}>
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#3E5AAD]/30 dark:border-[#F5F5DC]/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#3E5AAD] dark:bg-[#F5F5DC]"></div>
              <div className="mb-1 sm:mb-2">
                <span className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm font-semibold text-[#3E5AAD]/70 dark:text-[#F5F5DC]/70">
                  2020 — 2022
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-1 sm:mb-2 leading-tight">
                Smiling Woods Yurts - Manufacturer
              </h3>
              <p className="font-[family-name:var(--font-dm-sans)] italic text-sm sm:text-base text-[#3E5AAD]/80 dark:text-[#F5F5DC]/80 mb-3">
                Integrated Marketing Manager
              </p>
              <ul className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#3E5AAD] dark:text-[#F5F5DC] leading-relaxed list-disc space-y-1.5 marker:text-[8px] marker:text-[#3E5AAD]/50 dark:marker:text-[#F5F5DC]/50">
                <li>
                  Designed and built a custom enterprise system for customer
                  pipeline and project management.
                </li>
                <li>
                  Rebuilt company website with staff-editable functionality for
                  pricing, photography, and customer outreach.
                </li>
                <li>
                  Developed complete brand refresh including logo and visual
                  identity system.
                </li>
              </ul>
              <a
                href="https://smilingwoodsyurts.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-dm-sans)] inline-flex items-center gap-1.5 mt-3 text-sm sm:text-base font-semibold text-[#3E5AAD] dark:text-[#F5F5DC] underline underline-offset-4 decoration-1 hover:underline-offset-8 hover:decoration-2 transition-all duration-300 group"
              >
                see it in the wild
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
            </FadeInSection>

            {/* Timeline Item 4 */}
            <FadeInSection delay={300}>
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#3E5AAD]/30 dark:border-[#F5F5DC]/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#3E5AAD] dark:bg-[#F5F5DC]"></div>
              <div className="mb-1 sm:mb-2">
                <span className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm font-semibold text-[#3E5AAD]/70 dark:text-[#F5F5DC]/70">
                  2019 - Present
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-1 sm:mb-2 leading-tight">
                Freelance Web Developer
              </h3>
              <ul className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#3E5AAD] dark:text-[#F5F5DC] leading-relaxed list-disc space-y-1.5 marker:text-[8px] marker:text-[#3E5AAD]/50 dark:marker:text-[#F5F5DC]/50">
                <li>
                  Build custom websites and plugins for nonprofit organizations
                  using WordPress, Drupal, React, Astro, and Next.js.
                </li>
                <li>
                  Develop tailored functionality including content management
                  tools, donation systems, and interactive features.
                </li>
              </ul>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-dm-sans)] inline-flex items-center gap-1.5 mt-3 text-sm sm:text-base font-semibold text-[#3E5AAD] dark:text-[#F5F5DC] underline underline-offset-4 decoration-1 hover:underline-offset-8 hover:decoration-2 transition-all duration-300 group"
              >
                see some projects
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
            </FadeInSection>
            {/* Timeline Item 4 */}
            <FadeInSection delay={400}>
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#3E5AAD]/30 dark:border-[#F5F5DC]/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#3E5AAD] dark:bg-[#F5F5DC]"></div>
              <div className="mb-1 sm:mb-2">
                <span className="font-[family-name:var(--font-dm-sans)] text-xs sm:text-sm font-semibold text-[#3E5AAD]/70 dark:text-[#F5F5DC]/70">
                  2014 — 2019
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-1 sm:mb-2 leading-tight">
                Full Time Touring Musician
              </h3>
              <ul className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#3E5AAD] dark:text-[#F5F5DC] leading-relaxed list-disc space-y-1.5 marker:text-[8px] marker:text-[#3E5AAD]/50 dark:marker:text-[#F5F5DC]/50">
                <li>
                  Wrote some solo albums, worked with lots of other musicians.
                </li>
                <li>
                  Traveled the world playing music for people who liked it.
                </li>
              </ul>
              <a
                href="#"
                target="https://open.spotify.com/artist/41JNAYVuPs7zwJbQBQ6tec"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-dm-sans)] inline-flex items-center gap-1.5 mt-3 text-sm sm:text-base font-semibold text-[#3E5AAD] dark:text-[#F5F5DC] underline underline-offset-4 decoration-1 hover:underline-offset-8 hover:decoration-2 transition-all duration-300 group"
              >
                give it a listen
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-[#F5F5DC] dark:bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="font-[family-name:var(--font-loram)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-8 sm:mb-12 md:mb-16">
              Skills
            </h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* Technology Column */}
            <div>
              <h3 className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-4">
                Technology
              </h3>
              <ul className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#3E5AAD] dark:text-[#F5F5DC] space-y-2">
                <li>JavaScript / TypeScript</li>
                <li>PHP / WordPress / Drupal</li>
                <li>Version Control / Git</li>
                <li>React / Next.js</li>
                <li>HTML / CSS</li>
                <li>Node.js</li>
                <li>SQL</li>
              </ul>
            </div>

            {/* Design Column */}
            <div>
              <h3 className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-4">
                Design
              </h3>
              <ul className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#3E5AAD] dark:text-[#F5F5DC] space-y-2">
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
                <li>Figma</li>
              </ul>
            </div>

            {/* Systems Skills Column */}
            <div>
              <h3 className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-4">
                Systems
              </h3>
              <ul className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#3E5AAD] dark:text-[#F5F5DC] space-y-2">
                <li>SEO Optimization</li>
                <li>Google Analytics</li>
                <li>Brand Development</li>
                <li>Content Strategy</li>
                <li>
                  Copy Editing{" "}
                  <i className="text-xs italic">
                    (if it's something I care about)
                  </i>
                </li>
              </ul>
            </div>

            {/* Soft Skills Column */}
            <div>
              <h3 className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-4">
                Soft
              </h3>
              <ul className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#3E5AAD] dark:text-[#F5F5DC] space-y-2">
                <li>Me Talk Good Sometimes</li>
                <li>Also Listen Well</li>
                <li>My Team is My Life</li>
                <li>I've been said to take exceptional meeting notes</li>
              </ul>
            </div>
          </div>
          </FadeInSection>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-[#E8E6D9] dark:bg-[#0f0f1e]">
        <FadeInSection>
          <div className="max-w-5xl mx-auto flex items-center justify-center gap-4">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 sm:w-10 sm:h-10 text-[#3E5AAD] dark:text-[#F5F5DC]"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
          <div className="font-[family-name:var(--font-dm-sans)] text-base sm:text-lg text-[#3E5AAD] dark:text-[#F5F5DC]">
            <span className="font-semibold">
              Computer Science & Violin/Viola Performance
            </span>{" "}
            — Western Washington University{" "}
            <i className="text-xs">2011 - 2015</i>
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* Contact Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-[#F5F5DC] dark:bg-[#1a1a2e]">
        <FadeInSection>
          <div className="max-w-5xl w-full text-center">
            <h2 className="font-[family-name:var(--font-loram)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-6 sm:mb-8">
              Get In Touch
            </h2>
          <a
            href="mailto:grantleadie@gmail.com"
            className="font-[family-name:var(--font-dm-sans)] inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3E5AAD] dark:text-[#F5F5DC] hover:text-[#3E5AAD]/70 dark:hover:text-[#F5F5DC]/70 transition-colors underline decoration-2 underline-offset-4 break-all sm:break-normal px-2"
          >
            grantleadie@gmail.com
          </a>
        </div>
        </FadeInSection>
      </section>
    </div>
  );
}
