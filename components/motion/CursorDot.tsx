'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { duration, ease } from '@/lib/motion'

const pointerFine = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
const interactive = 'a, button, [role="button"]'
const grow = 3 // skala di atas tautan/tombol
const dimmed = 0.4 // opacity saat membesar, agar teks di bawahnya tetap terbaca

// Titik kecil pengikut pointer (D-10). Kursor asli tetap tampil. Mati di sentuh dan reduced motion.
export default function CursorDot() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add(pointerFine, () => {
      const dot = ref.current!
      const opts = { duration: duration.fast, ease: ease.enter }
      const x = gsap.quickTo(dot, 'x', opts)
      const y = gsap.quickTo(dot, 'y', opts)
      let shown = false
      let over = false
      gsap.set(dot, { xPercent: -50, yPercent: -50 })

      const sync = () =>
        gsap.to(dot, {
          opacity: !shown ? 0 : over ? dimmed : 1,
          scale: over ? grow : 1,
          ...opts,
          overwrite: 'auto',
        })
      const move = (e: PointerEvent) => {
        x(e.clientX)
        y(e.clientY)
        if (!shown) {
          shown = true
          sync()
        }
      }
      const hover = (e: PointerEvent) => {
        over = !!(e.target as Element).closest(interactive)
        if (shown) sync()
      }
      const leave = () => {
        shown = false
        sync()
      }

      document.addEventListener('pointermove', move)
      document.addEventListener('pointerover', hover)
      document.documentElement.addEventListener('pointerleave', leave)
      return () => {
        document.removeEventListener('pointermove', move)
        document.removeEventListener('pointerover', hover)
        document.documentElement.removeEventListener('pointerleave', leave)
      }
    })
    return () => mm.revert()
  })

  return (
    <div
      ref={ref}
      aria-hidden
      className="bg-ink pointer-events-none fixed top-0 left-0 z-[70] size-2 rounded-full opacity-0"
    />
  )
}
