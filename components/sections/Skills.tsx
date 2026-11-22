import Reveal from '@/components/motion/Reveal'
import Chip from '@/components/ui/Chip'
import Marquee from '@/components/ui/Marquee'
import SectionTitle from '@/components/ui/SectionTitle'
import { profile } from '@/content/profile'

const { skillsSection: t, education, certificates, skills } = profile

function Row({ title, meta, aside }: { title: string; meta: string; aside: string }) {
  return (
    <li className="border-line flex flex-wrap items-baseline justify-between gap-x-4 border-t py-4 first:border-t-0 first:pt-0">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-mute text-sm">{meta}</p>
      </div>
      <p className="text-mute text-sm">{aside}</p>
    </li>
  )
}

const subtitle = 'font-display mb-4 text-lg leading-none tracking-wide uppercase'

export default function Skills() {
  return (
    <section id="skill" className="border-line border-b py-14 min-[900px]:py-20">
      <div className="wrap">
        <SectionTitle>{t.title}</SectionTitle>
        <Marquee label={t.marquee} items={skills.flatMap((g) => g.items)} />
        <div className="mt-12 grid gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-16">
          <Reveal className="space-y-10">
            <div>
              <h3 className={subtitle}>{t.education}</h3>
              <ul>
                {education.map((e) => (
                  <Row key={e.title} title={e.title} meta={e.place} aside={e.period} />
                ))}
              </ul>
            </div>
            <div>
              <h3 className={subtitle}>{t.certificates}</h3>
              <ul>
                {certificates.map((c) => (
                  <Row key={c.name} title={c.name} meta={c.issuer} aside={c.year} />
                ))}
              </ul>
            </div>
          </Reveal>
          <div>
            <h3 className={subtitle}>{t.skills}</h3>
            <div className="space-y-6">
              {skills.map((g) => (
                <div key={g.group}>
                  <p className="text-mute mb-2 text-sm">{g.group}</p>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item}>
                        <Chip>{item}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
