'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { lenis as options } from '@/lib/motion'

// Satu-satunya tempat Lenis dan ScrollTrigger disinkronkan. Mati saat reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const lenis = new Lenis(options)
      const tick = (time: number) => lenis.raf(time * 1000)
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      return () => {
        gsap.ticker.remove(tick)
        lenis.destroy()
      }
    })
    return () => mm.revert()
  }, [])

  return null
}
