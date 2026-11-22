export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-line text-mute inline-block border px-2.5 py-1 text-[13px]">
      {children}
    </span>
  )
}
