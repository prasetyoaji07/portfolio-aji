import type { MetadataRoute } from 'next'
import { projects } from '@/content/projects'
import { siteUrl } from '@/lib/site'

// Hanya rute yang benar-benar ada: beranda dan halaman proyek unggulan (D-07).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    ...projects.filter((p) => p.featured).map((p) => ({ url: `${siteUrl}/proyek/${p.slug}` })),
  ]
}
