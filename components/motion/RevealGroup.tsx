'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { duration, ease, offset, stagger } from '@/lib/motion'

// Anak ber-`data-reveal` masuk berurutan, satu kali, per kelompok yang terlihat bersamaan.
export default function RevealGroup({
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
        ScrollTrigger.batch(ref.current!.querySelectorAll('[data-reveal]'), {
          start: 'top 85%',
          once: true,
          onEnter: (els) =>
            gsap.fromTo(
              els,
              { opacity: 0, y: offset },
              { opacity: 1, y: 0, duration: duration.base, ease: ease.enter, stagger },
            ),
        })
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
