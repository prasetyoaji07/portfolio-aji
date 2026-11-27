'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import type { copy } from '@/content/projects'
import { external } from '@/lib/utils'

type Status = 'idle' | 'waking' | 'ready' | 'failed'

const INTERVAL_MS = 3000
const ATTEMPT_TIMEOUT_MS = 5000
const MAX_WAIT_MS = 90_000

// Titik 1 → 2 → 3 → 1. Tiga titik selalu ada, hanya opacity yang berubah,
// jadi lebar teks tidak bergeser. aria-hidden agar tidak dibacakan ulang.
function WakingDots() {
  const [n, setN] = useState(1)

  useEffect(() => {
    const id = setInterval(() => setN((v) => (v % 3) + 1), 450)
    return () => clearInterval(id)
  }, [])

  return (
    <span aria-hidden="true">
      {[1, 2, 3].map((i) => (
        <span key={i} className={i <= n ? 'opacity-100' : 'opacity-0'}>
          .
        </span>
      ))}
    </span>
  )
}

export default function WakeServer({
  healthUrl,
  demoUrl,
  labels,
}: {
  healthUrl: string
  demoUrl?: string
  labels: typeof copy.wake
}) {
  const [status, setStatus] = useState<Status>('idle')
  const abort = useRef<AbortController | null>(null)
  const origin = new URL(healthUrl).origin

  useEffect(() => () => abort.current?.abort(), [])

  async function wake() {
    const { signal } = (abort.current = new AbortController())
    setStatus('waking')
    const deadline = Date.now() + MAX_WAIT_MS
    while (!signal.aborted && Date.now() < deadline) {
      try {
        const res = await fetch(healthUrl, {
          cache: 'no-store',
          signal: AbortSignal.timeout(ATTEMPT_TIMEOUT_MS),
        })
        if (res.ok) return setStatus('ready')
      } catch {
        // Server masih tidur: fetch gagal, coba lagi.
      }
      await new Promise((resolve) => setTimeout(resolve, INTERVAL_MS))
    }
    if (!signal.aborted) setStatus('failed')
  }

  return (
    <div className="flex flex-col items-start gap-3">
      {status === 'ready' && demoUrl ? (
        <Button href={demoUrl} {...external}>
          {labels.open}
        </Button>
      ) : (
        <Button
          onClick={wake}
          disabled={status === 'waking' || status === 'ready'}
        >
          {labels.button}
        </Button>
      )}
      <p aria-live="polite" className="text-mute min-h-6">
        {status === 'idle' ? (
          ''
        ) : status === 'waking' ? (
          <>
            {labels.waking}
            <WakingDots />
          </>
        ) : (
          labels[status]
        )}
      </p>
      {status === 'failed' && (
        <Button href={origin} variant="text" {...external}>
          {labels.openLink}
        </Button>
      )}
      {/* Kunjungan browser biasa membangunkan SnapDeploy; fetch dari skrip belum tentu. */}
      {status === 'waking' && (
        <iframe
          src={origin}
          title="Membangunkan server"
          aria-hidden="true"
          tabIndex={-1}
          className="hidden"
        />
      )}
    </div>
  )
}
