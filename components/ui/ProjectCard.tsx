import Image from 'next/image'
import Link from 'next/link'
import Chip from '@/components/ui/Chip'
import { copy, statusLabel, type Project } from '@/content/projects'
import { external, initials } from '@/lib/utils'

const linkCls = 'hover:text-red inline-flex min-h-11 items-center transition-colors duration-300'

// `compact`: tanpa sampul (proyek non-unggulan). Sampul hanya untuk proyek berrepo (BR-03).
export default function ProjectCard({
  project: p,
  compact,
}: {
  project: Project
  compact?: boolean
}) {
  const label = statusLabel[p.status]
  const cover = p.cover && (p.status === 'repo' || p.status === 'live') ? p.cover : null

  return (
    <article
      data-reveal
      className="group bg-panel border-line hover:border-red relative flex flex-col border transition-colors duration-300"
    >
      {!compact && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="from-red-deep to-panel grid size-full place-items-center bg-linear-160 to-70% transition-transform duration-300 group-focus-within:scale-105 group-hover:scale-105">
            {cover ? (
              <Image
                src={cover}
                alt={`${copy.coverAlt} ${p.name}`}
                fill
                sizes="(min-width: 901px) 380px, (min-width: 601px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <span
                aria-hidden
                className="font-display text-[72px] leading-none text-transparent [-webkit-text-stroke:1.5px_var(--color-red)]"
              >
                {initials(p.name)}
              </span>
            )}
          </div>
          {p.featured && (
            <span
              aria-hidden
              className="bg-red text-ink absolute bottom-3 left-3 px-3 py-1 text-sm opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100"
            >
              {copy.view}
            </span>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        {label && (
          <div>
            <Chip>{label}</Chip>
          </div>
        )}
        <h3 className="text-xl leading-tight font-bold">{p.name}</h3>
        <p className="text-red text-[19px] leading-tight font-bold">{p.kind}</p>
        <p className="text-mute text-[14.5px]">{p.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1.5">
          {p.stack.slice(0, 5).map((s) => (
            <li key={s}>
              <Chip>{s}</Chip>
            </li>
          ))}
        </ul>
        {(p.featured || p.repoUrl) && (
          <div className="flex gap-5 text-sm font-bold">
            {p.featured && (
              <Link
                href={`/proyek/${p.slug}`}
                aria-label={`${copy.detail}: ${p.name}`}
                className={`${linkCls} after:absolute after:inset-0`}
              >
                {copy.detail}
              </Link>
            )}
            {p.repoUrl && (
              <a href={p.repoUrl} {...external} className={`${linkCls} relative z-10`}>
                {copy.code}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
