import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { profile } from '@/content/profile'

const { title, text, back } = profile.notFound

export const metadata: Metadata = { title: `${title} – ${profile.name}` }

export default function NotFound() {
  return (
    <main id="konten" className="wrap py-14 min-[900px]:py-20">
      <p className="font-display text-red text-[clamp(60px,9vw,118px)] leading-[0.9]">404</p>
      <h1 className="font-display mt-4 mb-4 text-[clamp(30px,4vw,44px)] leading-none uppercase">
        {title}
      </h1>
      <p className="text-mute mb-8 max-w-[60ch]">{text}</p>
      <Button href="/">{back}</Button>
    </main>
  )
}
