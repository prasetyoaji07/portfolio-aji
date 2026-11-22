'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { ease, pinPerStep } from '@/lib/motion'

// Pin hanya bila muat di layar dan gerak diizinkan; selain itu daftar biasa dengan semua langkah tampil.
const pinnable =
  '(prefers-reduced-motion: no-preference) and (min-width: 768px) and (min-height: 640px)'
const dim = 0.5

// Scrub #2 dari 2 (terakhir yang diizinkan). Hanya `opacity` dan `scaleY`.
export default function ProcessMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = root.current!
      const all = (s: string) => Array.from(el.querySelectorAll<HTMLElement>(s))
      const mm = gsap.matchMedia()

      mm.add(pinnable, () => {
        const dots = all('[data-dot]')
        const bodies = all('[data-body]')
        const segs = all('[data-seg]')
        gsap.set(dots.slice(1), { opacity: 0 })
        gsap.set(bodies.slice(1), { opacity: dim })
        gsap.set(segs, { scaleY: 0 })

        const tl = gsap.timeline({
          defaults: { ease: ease.scrub },
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: () => `+=${window.innerHeight * pinPerStep * dots.length}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        segs.forEach((seg, i) =>
          tl.to(seg, { scaleY: 1 }).to([dots[i + 1], bodies[i + 1]], { opacity: 1 }),
        )
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      id="cara-kerja"
      className="border-line border-b py-14 min-[900px]:py-20"
    >
      {children}
    </section>
  )
}
