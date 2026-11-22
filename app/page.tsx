import type { Metadata } from 'next'
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'
import Process from '@/components/sections/Process'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import { profile } from '@/content/profile'
import { siteUrl } from '@/lib/site'

export const metadata: Metadata = { alternates: { canonical: '/' } }

const { contact } = profile
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  honorificSuffix: profile.title,
  jobTitle: profile.role,
  url: siteUrl,
  email: contact.email,
  sameAs: [contact.github, contact.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'Bekasi', addressRegion: 'Jawa Barat', addressCountry: 'ID' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: profile.education[0].place },
  knowsAbout: profile.skills.flatMap((g) => g.items),
}

export default function Home() {
  return (
    <main id="konten">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
      />
      <Hero />
      <Projects />
      <Skills />
      <Process />
      <Contact />
    </main>
  )
}
