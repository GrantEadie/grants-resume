'use client'

import AnimatedHeading from './AnimatedHeading'

export default function AnimatedHeroHeading() {
  return (
    <h1 className="font-[family-name:var(--font-loram)] text-[16vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#3E5AAD] dark:text-[#F5F5DC] leading-[0.9] tracking-tight">
      <span className="block sm:inline">
        <AnimatedHeading as="span" className="contents">
          Grant
        </AnimatedHeading>
      </span>
      {' '}
      <span className="block sm:inline">
        <AnimatedHeading as="span" className="contents">
          Eadie
        </AnimatedHeading>
      </span>
    </h1>
  )
}
