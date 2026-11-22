'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { duration, ease, offset } from '@/lib/motion'

// Masuk satu kali saat terlihat. Pakai terbatas (DESIGN §9). Tersembunyi hanya lewat CSS `.js [data-reveal]`.
export default function Reveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: offset },
          {
            opacity: 1,
            y: 0,
            duration: duration.base,
            ease: ease.enter,
            scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
          },
        )
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  )
}
