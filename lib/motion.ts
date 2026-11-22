// Nilai mengikuti DESIGN §5. Jangan menulis durasi atau easing literal di komponen.
export const duration = { fast: 0.3, base: 0.6, slow: 1 } as const
export const ease = { enter: 'power3.out', transition: 'power2.inOut', scrub: 'none' } as const
export const stagger = 0.035
export const offset = 24 // translateY masuk maksimal (px)
export const parallax = 0.08 // fraksi tinggi viewport, maksimal
export const lenis = { duration: 1.2, smoothWheel: true }
export const pinPerStep = 0.6 // fraksi tinggi viewport scroll per langkah di Cara kerja
export const magnet = 0.25 // fraksi jarak pointer ke pusat tombol (efek magnetik)
export const preloader = 1.2 // detik, total Preloader (D-09); Hero menunggu selama ini
export const bezier = { transition: [0.455, 0.03, 0.515, 0.955] } as const // setara power2.inOut, untuk Motion
