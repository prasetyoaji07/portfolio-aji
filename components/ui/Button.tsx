import Link from 'next/link'
import { cn } from '@/lib/utils'

const variants = {
  solid: 'bg-red text-ink hover:bg-red-deep',
  outline: 'border border-red text-ink hover:bg-red-deep',
  text: 'text-ink hover:text-red',
}

// href internal → <Link> (navigasi tanpa muat ulang, agar transisi halaman jalan); href lain → <a>; tanpa href → <button>.
type Props = { variant?: keyof typeof variants } & (
  | (React.ComponentProps<'a'> & { href: string })
  | React.ComponentProps<'button'>
)

export default function Button({
  variant = 'solid',
  className,
  ...props
}: Props) {
  const cls = cn(
    'inline-flex min-h-11 items-center justify-center px-5 font-medium transition-colors duration-300',
    variants[variant],
    className,
  )
  if (!('href' in props)) return <button type="button" className={cls} {...props} />
  return props.href.startsWith('/') && !props.download ? (
    <Link className={cls} {...props} />
  ) : (
    <a className={cls} {...props} />
  )
}
