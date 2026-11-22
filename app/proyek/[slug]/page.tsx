import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Button from '@/components/ui/Button'
import Chip from '@/components/ui/Chip'
import { profile } from '@/content/profile'
import { copy, projects, statusLabel } from '@/content/projects'
import { ogImages } from '@/lib/site'
import { external } from '@/lib/utils'

type Props = { params: Promise<{ slug: string }> }

const featured = projects.filter((p) => p.featured)
const h = 'border-line border-t pt-4 text-lg font-bold'

export const dynamicParams = false
export const generateStaticParams = () => featured.map(({ slug }) => ({ slug }))

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = featured.find((x) => x.slug === slug)
  if (!p) return {}
  const title = `${p.name} – ${profile.name}`
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/proyek/${p.slug}` },
    openGraph: { title, description: p.summary, images: ogImages },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const i = featured.findIndex((p) => p.slug === slug)
  if (i < 0) notFound()
  const p = featured[i]
  const next = featured[(i + 1) % featured.length]
  // BR-03: proyek privat atau segera hadir hanya menampilkan deskripsi umum.
  const open = p.status === 'repo' || p.status === 'live'

  return (
    <main id="konten" className="wrap py-14 min-[900px]:py-20">
      <Button href="/#proyek" variant="text" className="-ml-5">
        {copy.back}
      </Button>
      <header className="mt-6 mb-12">
        <p className="text-red text-[19px] font-bold">{p.kind}</p>
        <h1 className="font-display mt-2 mb-5 text-[clamp(40px,6vw,72px)] leading-[.95] uppercase">
          {p.name}
        </h1>
        <Chip>{statusLabel[p.status] ?? copy.publicRepo}</Chip>
      </header>
      <div className="grid gap-12 min-[900px]:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-10">
          {open && p.cover && (
            <div className="relative aspect-[16/10]">
              <Image
                src={p.cover}
                alt={`${copy.coverAlt} ${p.name}`}
                fill
                priority
                sizes="(min-width: 900px) 640px, 100vw"
                className="object-cover"
              />
            </div>
          )}
          <section>
            <h2 className={h}>{copy.summary}</h2>
            <p className="mt-4 max-w-[70ch]">{p.description ?? p.summary}</p>
          </section>
          {open && p.highlights && (
            <section>
              <h2 className={h}>{copy.flow}</h2>
              <ul className="mt-2 max-w-[70ch]">
                {p.highlights.map((t) => (
                  <li key={t} className="border-line border-b py-3">
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {p.note && (
            <section>
              <h2 className={h}>{copy.note}</h2>
              <p className="text-mute mt-4">{p.note}</p>
            </section>
          )}
        </div>
        <div className="flex flex-col gap-10">
          <section>
            <h2 className={h}>{copy.role}</h2>
            <p className="mt-4">{p.role}</p>
          </section>
          <section>
            <h2 className={h}>{copy.stack}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s}>
                  <Chip>{s}</Chip>
                </li>
              ))}
            </ul>
          </section>
          {open && (p.repoUrl || p.demoUrl) && (
            <section>
              <h2 className={h}>{copy.links}</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.repoUrl && (
                  <Button href={p.repoUrl} {...external}>
                    {copy.code}
                  </Button>
                )}
                {p.demoUrl && (
                  <Button href={p.demoUrl} variant="outline" {...external}>
                    {copy.demo}
                  </Button>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
      {next.slug !== p.slug && (
        <Link
          href={`/proyek/${next.slug}`}
          className="border-line group mt-16 block border-t pt-8"
        >
          <span className="text-mute block text-sm">{copy.next}</span>
          <span className="font-display group-hover:text-red text-[clamp(28px,4vw,44px)] uppercase transition-colors duration-300">
            {next.name}
          </span>
        </Link>
      )}
    </main>
  )
}
