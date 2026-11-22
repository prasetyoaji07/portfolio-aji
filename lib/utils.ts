export const cn = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(' ')

// Maksimal dua huruf awal dari kata yang diawali huruf atau angka: "Prasetyo Aji" → "PA".
export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter((w) => /^\w/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export const external = { target: '_blank', rel: 'noopener noreferrer' }
