import Chip from '@/components/ui/Chip'

// CSS murni. Daftar digandakan agar putaran mulus; salinan kedua disembunyikan dari pembaca layar.
// Berhenti saat hover/fokus; saat reduced motion jadi baris biasa yang bisa digeser.
export default function Marquee({
  items,
  label,
}: {
  items: string[]
  label: string
}) {
  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className="group overflow-hidden motion-reduce:overflow-x-auto"
    >
      <ul className="animate-marquee flex w-max gap-2 pr-2 group-hover:[animation-play-state:paused] group-focus:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) =>
          items.map((item) => (
            <li
              key={`${copy}-${item}`}
              aria-hidden={copy ? true : undefined}
              className={copy ? 'motion-reduce:hidden' : undefined}
            >
              <Chip>{item}</Chip>
            </li>
          )),
        )}
      </ul>
    </div>
  )
}
