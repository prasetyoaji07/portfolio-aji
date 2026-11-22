import { profile } from '@/content/profile'

export default function Footer() {
  return (
    <footer className="border-line border-t py-6">
      <div className="wrap text-mute flex flex-wrap items-center justify-between gap-x-6 text-sm">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-x-6">
          {profile.links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith('http') && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className="hover:text-ink inline-flex min-h-11 items-center transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
