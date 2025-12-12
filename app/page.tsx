import ThemeToggle from "./components/ThemeToggle";
import FadeInSection from "./components/FadeInSection";
import AnimatedHeroHeading from "./components/AnimatedHeroHeading";
import AnimatedHeading from "./components/AnimatedHeading";
import AnimatedDecorativeShape from "./components/AnimatedDecorativeShape";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] dark:bg-[#1a1a2e]">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Decorative Shape */}
        <AnimatedDecorativeShape />

        <div className="max-w-5xl w-full mx-auto relative z-10">
          <FadeInSection>
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <AnimatedHeroHeading />
                <AnimatedHeading
                  as="h3"
                  className="font-[family-name:var(--font-loram)] text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold [-webkit-text-stroke:1px_#3E5AAD] dark:[-webkit-text-stroke:1px_#F5F5DC] [-webkit-text-fill-color:transparent] tracking-wide"
                >
                  Web Dev | Designer | Etc
                </AnimatedHeading>
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
                <a
                  href="/portfolio"
                  className="font-[family-name:var(--font-dm-sans)] inline-flex items-center gap-1.5 mt-6 text-base sm:text-lg font-semibold text-[#3E5AAD] dark:text-[#F5F5DC] underline underline-offset-4 decoration-1 hover:underline-offset-8 hover:decoration-2 transition-all duration-300 group"
                >
                  see portfolio
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
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-[#E8E6D9] dark:bg-[#0f0f1e]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <AnimatedHeading
              as="h2"
              className="font-[family-name:var(--font-loram)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-8 sm:mb-12 md:mb-16"
            >
              Work
            </AnimatedHeading>
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
              <AnimatedHeading
                as="h3"
                className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-1 sm:mb-2 leading-tight"
              >
                TwispWorks Foundation 501(c)(3)
              </AnimatedHeading>
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
              <AnimatedHeading
                as="h3"
                className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-1 sm:mb-2 leading-tight"
              >
                Smiling Woods Yurts - Manufacturer
              </AnimatedHeading>
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
              <AnimatedHeading
                as="h3"
                className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-1 sm:mb-2 leading-tight"
              >
                Freelance Web Developer
              </AnimatedHeading>
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
              <AnimatedHeading
                as="h3"
                className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-1 sm:mb-2 leading-tight"
              >
                Full Time Touring Musician
              </AnimatedHeading>
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
            <AnimatedHeading
              as="h2"
              className="font-[family-name:var(--font-loram)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-8 sm:mb-12 md:mb-16"
            >
              Skills
            </AnimatedHeading>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* Technology Column */}
            <div>
              <AnimatedHeading
                as="h3"
                className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-4"
              >
                Technology
              </AnimatedHeading>
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
              <AnimatedHeading
                as="h3"
                className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-4"
              >
                Design
              </AnimatedHeading>
              <ul className="font-[family-name:var(--font-dm-sans)] text-sm sm:text-base text-[#3E5AAD] dark:text-[#F5F5DC] space-y-2">
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
                <li>Figma</li>
              </ul>
            </div>

            {/* Systems Skills Column */}
            <div>
              <AnimatedHeading
                as="h3"
                className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-4"
              >
                Systems
              </AnimatedHeading>
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
              <AnimatedHeading
                as="h3"
                className="font-[family-name:var(--font-loram)] text-xl sm:text-2xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-4"
              >
                Soft
              </AnimatedHeading>
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
            <AnimatedHeading
              as="h2"
              className="font-[family-name:var(--font-loram)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] mb-6 sm:mb-8"
            >
              Get In Touch
            </AnimatedHeading>
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
