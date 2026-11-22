'use client'

import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

const link =
  'text-mute hover:text-ink inline-flex min-h-11 items-center text-sm transition-colors duration-300'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()

  // Turun melewati 80 px → sembunyi, naik → muncul. Reduced motion: lewat CSS.
  useMotionValueEvent(scrollY, 'change', (y) =>
    setHidden(y > (scrollY.getPrevious() ?? 0) && y > 80),
  )

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="bg-red fixed inset-x-0 top-0 z-50 h-0.5 origin-left motion-reduce:hidden"
      />
      <header
        onFocus={() => setHidden(false)}
        className={cn(
          'bg-bg border-line ease-enter sticky top-0 z-40 border-b transition-transform duration-300',
          hidden && '-translate-y-full motion-reduce:translate-y-0',
        )}
      >
        <div className="wrap flex flex-wrap items-center justify-between gap-x-8 py-2">
          <Link
            href="/"
            className="font-display inline-flex min-h-11 items-center text-xl tracking-wide uppercase"
          >
            {profile.name}
          </Link>
          <nav
            aria-label={profile.a11y.navLabel}
            className="order-last flex w-full gap-x-6 md:order-none md:w-auto"
          >
            {profile.nav.map(({ label, href }) => (
              <Link key={href} href={href} className={link}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <p className="text-mute hidden items-center gap-2 text-sm lg:flex">
              <span
                aria-hidden
                className="bg-red size-2 rounded-full shadow-[0_0_8px_var(--color-red)]"
              />
              {profile.openTo}
            </p>
            <Button href={profile.contact.cv} variant="outline" download>
              {profile.cvLabel}
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
