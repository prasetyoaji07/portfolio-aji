'use client'

import { useEffect, useState } from 'react'

const fmt = new Intl.DateTimeFormat('id-ID', {
  timeZone: 'Asia/Jakarta',
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})

// Kosong sampai terpasang di browser, supaya tidak beda dengan HTML server (hydration).
export default function LiveClock() {
  const [now, setNow] = useState('')

  useEffect(() => {
    const tick = () => setNow(`${fmt.format(new Date()).replace(/\./g, ':')} WIB`)
    tick()
    const id = setInterval(tick, 1000 * 15)
    return () => clearInterval(id)
  }, [])

  return <span suppressHydrationWarning>{now}</span>
}