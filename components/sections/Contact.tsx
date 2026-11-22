import CopyEmail from '@/components/motion/CopyEmail'
import Reveal from '@/components/motion/Reveal'
import Button from '@/components/ui/Button'
import { external } from '@/lib/utils'
import { profile } from '@/content/profile'

const { contactSection: t, contact, links, cvLabel } = profile

export default function Contact() {
  return (
    <section id="kontak" className="py-14 min-[900px]:py-20">
      <div className="wrap grid items-start gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-16">
        <Reveal>
          <h2 className="font-display mb-6 text-[clamp(60px,9vw,118px)] leading-[0.9] uppercase">
            {t.title}
          </h2>
          <p className="text-mute mb-8 max-w-[60ch]">{t.text}</p>
          <div className="flex flex-wrap items-center gap-4">
            <CopyEmail
              email={contact.email}
              label={t.copy}
              done={t.copied}
              failed={t.failed}
            />
            <Button href={contact.cv} variant="outline" download>
              {cvLabel}
            </Button>
          </div>
        </Reveal>
        <ul className="border-line border-b">
          {links.map(({ label, href, value }) => (
            <li key={label} className="border-line border-t">
              <a
                href={href}
                {...(href.startsWith('http') && external)}
                className="hover:text-red flex min-h-11 flex-wrap items-baseline justify-between gap-x-4 py-4 transition-colors duration-300"
              >
                <span className="text-mute text-sm">{label}</span>
                <span className="text-lg break-all">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
