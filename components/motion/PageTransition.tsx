'use client'

import { animate } from 'motion/react'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { bezier, duration } from '@/lib/motion'

const opts = { duration: duration.fast, ease: bezier.transition }
const reduce = '(prefers-reduced-motion: reduce)'

// Tirai merah menutup (0,3 s), rute berpindah, tirai terbuka (0,3 s). Tirai diam di bawah layar (top-full),
// bergerak lewat `transform`. Klik tautan internal ke rute lain dicegat; reduced motion pindah langsung.
export default function PageTransition() {
  const ref = useRef<HTMLDivElement>(null)
  const busy = useRef(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const router = useRouter()
  const pathname = usePathname()

  const open = useCallback(async () => {
    clearTimeout(timer.current)
    const el = ref.current!
    await animate(el, { y: '-200%' }, opts)
    el.style.transform = ''
    busy.current = false
  }, [])

  // Rute sudah berganti: buka tirai.
  useEffect(() => {
    if (busy.current) open()
  }, [pathname, open])

  useEffect(() => {
    const onClick = async (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>('a')
      if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      if (a.target || a.hasAttribute('download') || matchMedia(reduce).matches) return
      const url = new URL(a.href)
      if (url.origin !== location.origin || url.pathname === location.pathname) return

      e.preventDefault()
      if (busy.current) return
      busy.current = true
      await animate(ref.current!, { y: '-100%' }, opts)
      router.push(url.pathname + url.search + url.hash)
      timer.current = setTimeout(open, 2000) // cadangan bila rute tidak berganti
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [router, open])

  return (
    <div
      ref={ref}
      aria-hidden
      className="bg-red pointer-events-none fixed inset-x-0 top-full z-[55] h-full"
    />
  )
}
