'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import { gsap, useGSAP } from '@/lib/gsap'
import { duration, ease, magnet } from '@/lib/motion'

type Props = { email: string; label: string; done: string; failed: string }

// Tombol salin email dengan umpan balik. Efek magnetik hanya untuk pointer halus (DESIGN §7).
export default function CopyEmail({ email, label, done, failed }: Props) {
  const [status, setStatus] = useState<'idle' | 'done' | 'failed'>('idle')
  const wrap = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (status === 'idle') return
    const t = setTimeout(() => setStatus('idle'), 2000)
    return () => clearTimeout(t)
  }, [status])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(
        '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
        () => {
          const box = wrap.current!
          const btn = box.firstElementChild!
          const opts = { duration: duration.fast, ease: ease.enter }
          const x = gsap.quickTo(btn, 'x', opts)
          const y = gsap.quickTo(btn, 'y', opts)
          const move = (e: PointerEvent) => {
            const r = box.getBoundingClientRect()
            x((e.clientX - r.left - r.width / 2) * magnet)
            y((e.clientY - r.top - r.height / 2) * magnet)
          }
          const reset = () => (x(0), y(0))
          box.addEventListener('pointermove', move)
          box.addEventListener('pointerleave', reset)
          return () => {
            box.removeEventListener('pointermove', move)
            box.removeEventListener('pointerleave', reset)
          }
        },
      )
      return () => mm.revert()
    },
    { scope: wrap },
  )

  const copy = () =>
    navigator.clipboard
      .writeText(email)
      .then(() => setStatus('done'))
      .catch(() => setStatus('failed'))

  return (
    <span ref={wrap} className="inline-flex p-3 -m-3">
      <Button onClick={copy}>
        <span aria-live="polite">
          {status === 'idle' ? label : status === 'done' ? done : failed}
        </span>
      </Button>
    </span>
  )
}
