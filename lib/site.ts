import { profile } from '@/content/profile'

// Atur NEXT_PUBLIC_SITE_URL setelah domain pasti (D-08). Di Vercel, domain produksi dipakai otomatis.
const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercel ? `https://${vercel}` : 'http://localhost:3000')

export const ogImages = [{ url: '/og.png', width: 1200, height: 630, alt: profile.seo.ogAlt }]
