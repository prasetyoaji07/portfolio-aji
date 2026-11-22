import ProcessMotion from '@/components/motion/ProcessMotion'
import SectionTitle from '@/components/ui/SectionTitle'
import { profile } from '@/content/profile'

const { processSection: t, process: steps } = profile

export default function Process() {
  return (
    <ProcessMotion>
      <div className="wrap">
        <SectionTitle>{t.title}</SectionTitle>
        <ol className="max-w-2xl">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 pb-6 last:pb-0">
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="bg-line absolute top-11 bottom-0 left-[22px] w-px"
                >
                  <span data-seg className="bg-red block h-full origin-top" />
                </span>
              )}
              <span className="border-line relative grid size-11 shrink-0 place-items-center rounded-full border">
                <span data-dot className="bg-red absolute inset-0 rounded-full" />
                <span className="font-display relative text-xl">{i + 1}</span>
              </span>
              <div data-body className="pt-1.5">
                <h3 className="font-display mb-1.5 text-lg leading-none tracking-wide uppercase">
                  {s.title}
                </h3>
                <p className="text-mute">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </ProcessMotion>
  )
}
