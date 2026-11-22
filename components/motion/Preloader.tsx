'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { duration, ease, offset } from '@/lib/motion'

// Tampil dari CSS (`globals.css`) hanya pada kunjungan pertama sesi; dilewati reduced motion (skrip di layout).
// Nama masuk (0,3 s), tertahan 0,3 s, tirai terangkat (0,6 s): total 1,2 s = token `preloader`.
export default function Preloader({ name }: { name: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current!
      const html = document.documentElement
      if (html.classList.contains('skip-preloader')) return

      gsap
        .timeline({
          onComplete: () => {
            gsap.set(el, { display: 'none' })
            html.classList.add('skip-preloader')
            try {
              sessionStorage.setItem('preloaded', '1')
            } catch {
              /* sessionStorage tidak tersedia: preloader tampil lagi, tidak fatal */
            }
          },
        })
        .fromTo(
          '[data-name]',
          { opacity: 0, y: offset },
          { opacity: 1, y: 0, duration: duration.fast, ease: ease.enter },
        )
        .to(el, { yPercent: -100, duration: duration.base, ease: ease.transition }, duration.fast * 2)
    },
    { scope: ref },
  )

  return (
    <div
      ref={ref}
      data-preloader
      aria-hidden
      className="bg-red fixed inset-0 z-[60] place-items-center"
    >
      <p
        data-name
        className="font-display text-[clamp(48px,9vw,118px)] leading-none uppercase"
      >
        {name}
      </p>
    </div>
  )
}
