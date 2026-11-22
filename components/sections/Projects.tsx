import RevealGroup from '@/components/motion/RevealGroup'
import ProjectCard from '@/components/ui/ProjectCard'
import SectionTitle from '@/components/ui/SectionTitle'
import { copy, projects } from '@/content/projects'

const grid = 'grid gap-5 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3'

export default function Projects() {
  return (
    <section id="proyek" className="border-line border-b py-14 min-[900px]:py-20">
      <div className="wrap">
        <SectionTitle>{copy.title}</SectionTitle>
        <RevealGroup className={grid}>
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
        </RevealGroup>
        <RevealGroup className={`${grid} mt-5`}>
          {projects
            .filter((p) => !p.featured)
            .map((p) => (
              <ProjectCard key={p.slug} project={p} compact />
            ))}
        </RevealGroup>
      </div>
    </section>
  )
}
