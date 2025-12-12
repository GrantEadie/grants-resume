'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface AnimatedHeadingProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
}

export default function AnimatedHeading({
  children,
  className = '',
  as: Tag = 'h1'
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const letters = containerRef.current.querySelectorAll('.letter')
    const letterStates = new Map<HTMLElement, boolean>()

    // Initial entrance animation - letters come up from bottom
    gsap.fromTo(
      letters,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.03
      }
    )

    const cleanupFunctions: (() => void)[] = []

    letters.forEach((letter) => {
      const element = letter as HTMLElement
      letterStates.set(element, false)

      const handleMouseEnter = (e: MouseEvent) => {
        // Only fire if we haven't fired yet during this hover
        if (letterStates.get(element)) return

        letterStates.set(element, true)

        const rect = element.getBoundingClientRect()
        const letterCenterX = rect.left + rect.width / 2
        const letterCenterY = rect.top + rect.height / 2

        // Calculate direction away from cursor
        const deltaX = letterCenterX - e.clientX
        const deltaY = letterCenterY - e.clientY

        // Normalize and scale the movement (reduced to 8px for more gentle effect)
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        const moveX = (deltaX / distance) * 8
        const moveY = (deltaY / distance) * 8

        // Fire the animation
        gsap.to(element, {
          x: moveX,
          y: moveY,
          duration: 0.2,
          ease: 'power1.out',
          onComplete: () => {
            // Gently reset after a brief pause
            gsap.to(element, {
              x: 0,
              y: 0,
              duration: 0.3,
              ease: 'power2.inOut',
              delay: 0
            })
          }
        })
      }

      const handleMouseLeave = () => {
        // Reset the state so it can fire again on next hover
        letterStates.set(element, false)
      }

      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)

      cleanupFunctions.push(() => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      })
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }, [children])

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="letter inline-block"
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <Tag
      ref={containerRef as any}
      className={className}
    >
      {splitText(children)}
    </Tag>
  )
}
