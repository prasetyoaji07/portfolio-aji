import Image from 'next/image'
import HeroMotion from '@/components/motion/HeroMotion'
import Button from '@/components/ui/Button'
import { profile } from '@/content/profile'

const { name, role, hero, stats, photo } = profile

// Di bawah 1100px: foto (di atas, menimpa "PORTFOLIO"), teks, angka ditumpuk.
// Mulai 1100px: tiga kolom (teks | foto di tengah, di depan "PORTFOLIO" | angka).
export default function Hero() {
  return (
    <HeroMotion>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-3.5 flex origin-top scale-y-[1.7] justify-center select-none"
      >
        <span
          data-big
          data-reveal
          className="font-display text-red [mask-image:linear-gradient(black_25%,transparent_92%)] min-[1100px]:[mask-image:linear-gradient(black_15%,transparent_68%)] text-[19.5vw] leading-none tracking-[-.01em] whitespace-nowrap uppercase min-[1100px]:text-[clamp(110px,24vw,330px)]"
        >
          {hero.word}
        </span>
      </div>
      <div className="wrap relative grid items-end gap-6 pt-4 pb-12 min-[1100px]:grid-cols-[minmax(0,1fr)_clamp(320px,28vw,440px)_minmax(0,1fr)] min-[1100px]:pt-[150px]">
        <div className="relative z-10 -mt-40 min-[1100px]:mt-0">
  <p data-intro data-reveal className="text-mute mb-1.5 font-serif text-[26px] ...">
            {hero.greeting}
          </p>
          <h1
            data-name
            data-reveal
            className="font-display text-[clamp(60px,9vw,118px)] leading-[.92] whitespace-nowrap uppercase min-[1100px]:text-[clamp(60px,7vw,104px)]"
          >
            {name.split(' ').map((w) => (
              <span key={w} className="block">
                {w}
              </span>
            ))}
          </h1>
          <p
            data-intro
            data-reveal
            className="text-red mt-4 mb-2 text-xl font-bold tracking-wide"
          >
            {role}
          </p>
          <p data-intro data-reveal className="text-mute mb-6 max-w-[56ch]">
            {hero.lead}
          </p>
          <div data-intro data-reveal className="flex flex-wrap gap-3">
            <Button href="/#proyek">{hero.primary}</Button>
            <Button href="/#kontak" variant="outline">
              {hero.secondary}
            </Button>
          </div>
        </div>
        <div
          data-intro
          data-reveal
          className="relative order-first mx-auto aspect-[4/5] w-full max-w-[300px] min-[1100px]:order-none min-[1100px]:-mb-12 min-[1100px]:max-w-none"
        >
          {/* Mulai 1100px foto diperbesar 30% dan menjulang ke atas, di depan "PORTFOLIO"; dasarnya menempel ke bawah. */}
          <div className="absolute inset-0 min-[1100px]:inset-auto min-[1100px]:bottom-0 min-[1100px]:left-1/2 min-[1100px]:h-[125%] min-[1100px]:w-[130%] min-[1100px]:-translate-x-1/2">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              quality={90}
              sizes="(min-width: 1100px) 40vw, 300px"
              className="object-cover object-top [mask-image:linear-gradient(to_right,transparent,black_16%,black_84%,transparent),linear-gradient(to_bottom,black_70%,transparent)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
            />
          </div>
        </div>
        <dl data-intro data-reveal className="flex justify-center gap-10">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col-reverse items-center text-center"
            >
              <dt className="text-mute text-[13px]">{label}</dt>
              <dd
                data-count={value}
                className="font-display text-red text-[40px] leading-none"
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </HeroMotion>
  )
}