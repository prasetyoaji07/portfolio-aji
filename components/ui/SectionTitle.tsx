export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display after:bg-line mb-9 flex items-center gap-5 text-[clamp(30px,4vw,44px)] leading-none uppercase after:h-px after:flex-1">
      {children}
    </h2>
  )
}
