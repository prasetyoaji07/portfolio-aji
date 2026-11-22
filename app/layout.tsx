import type { Metadata } from 'next'
import { Anton, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import CursorDot from '@/components/motion/CursorDot'
import PageTransition from '@/components/motion/PageTransition'
import Preloader from '@/components/motion/Preloader'
import SmoothScroll from '@/components/motion/SmoothScroll'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import { profile } from '@/content/profile'
import { ogImages, siteUrl } from '@/lib/site'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

// Preloader dilewati pada kunjungan ulang, reduced motion, atau bila sessionStorage tidak bisa dibaca.
const SCRIPT = `const d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('preloaded')||matchMedia('(prefers-reduced-motion: reduce)').matches)d.classList.add('skip-preloader')}catch(e){d.classList.add('skip-preloader')}`

const title = `${profile.name} – ${profile.role}`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.seo.description,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: profile.name,
    title,
    description: profile.seo.description,
    images: ogImages,
  },
  twitter: { card: 'summary_large_image', title, description: profile.seo.description },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${anton.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script
          id="init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: SCRIPT }}
        />
        <a
          href="#konten"
          className="bg-red focus:text-ink sr-only px-4 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50"
        >
          {profile.a11y.skip}
        </a>
        <Preloader name={profile.name} />
        <PageTransition />
        <CursorDot />
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
