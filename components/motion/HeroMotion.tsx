'use client'

import { useRef } from 'react'
import { gsap, SplitText, useGSAP } from '@/lib/gsap'
import { duration, ease, offset, parallax, preloader, stagger } from '@/lib/motion'

const hidden = { opacity: 0, y: offset }
const shown = { opacity: 1, y: 0 }

// Satu-satunya momen unggulan. Keadaan awal "tersembunyi" datang dari CSS `.js [data-reveal]`.
export default function HeroMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = root.current!
      const one = (s: string) => el.querySelector<HTMLElement>(s)!
      const counters = el.querySelectorAll<HTMLElement>('[data-count]')
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = (s: string) =>
          SplitText.create(one(s), { type: 'words,chars' }).chars
        const big = split('[data-big]')
        const name = split('[data-name]')
        gsap.set([one('[data-big]'), one('[data-name]')], { opacity: 1 })

        // Menunggu Preloader selesai (kelas `skip-preloader` ada bila dilewati atau sudah pernah tampil).
        const wait = document.documentElement.classList.contains('skip-preloader') ? 0 : preloader
        const tl = gsap.timeline({ defaults: { ease: ease.enter }, delay: wait })
        tl.fromTo(big, { ...hidden }, { ...shown, duration: duration.slow, stagger })
          .fromTo(name, { ...hidden }, { ...shown, duration: duration.base, stagger }, duration.fast)
          .fromTo(
            el.querySelectorAll('[data-intro]'),
            { ...hidden },
            { ...shown, duration: duration.base, stagger },
            duration.base,
          )

        counters.forEach((c) => {
          const n = { v: 0 }
          c.textContent = '0'
          tl.to(
            n,
            {
              v: Number(c.dataset.count),
              duration: duration.slow,
              snap: { v: 1 },
              onUpdate: () => (c.textContent = String(n.v)),
            },
            duration.base,
          )
        })

        gsap.to(one('[data-big]'), {
          y: () => window.innerHeight * parallax,
          ease: ease.scrub,
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        })

        return () =>
          counters.forEach((c) => (c.textContent = c.dataset.count ?? ''))
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      id="top"
      className="border-line relative min-h-[640px] overflow-hidden border-b"
    >
      {children}
    </section>
  )
}
