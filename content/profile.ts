import { projects } from './projects'

const certificates = [
  { name: 'LSP Junior Web Development', issuer: 'BNSP', year: '2026' },
  { name: 'AI Productivity & AI API Integration for Developers', issuer: 'Hacktiv8', year: '2026' },
  { name: 'Intro to Data Analytics', issuer: 'RevoU', year: '2026' },
  { name: 'Web Development', issuer: 'Infinite Learning', year: '2023' },
]

const contact = {
  email: 'prasetyoaji23yo@gmail.com',
  phone: '+62 882-9024-8798',
  whatsapp: 'https://wa.me/6288290248798',
  github: 'https://github.com/prasetyoaji07',
  linkedin: 'https://linkedin.com/in/prasetyoaji07',
  cv: '/cv-prasetyo-aji.pdf',
}

export const profile = {
  name: 'Prasetyo Aji',
  title: 'S.Kom.',
  role: 'Full-Stack Web Developer',
  location: 'Bekasi, Jawa Barat',
  intro:
    'Lulusan S1 Informatika (IPK 3,47) yang membangun sistem berbasis data: absensi, maintenance, pemesanan restoran, dan prediksi permintaan. Dari desain di Figma sampai API dan database.',
  openTo: 'Terbuka untuk Maganghub Batch 3B',
  photo: {
    src: '/aji.webp',
    alt: 'Foto Prasetyo Aji, Full-Stack Web Developer',
  },
  hero: {
    greeting: 'Halo, saya',
    word: 'Portfolio',
    lead: 'Membangun sistem berbasis data: absensi, maintenance, pemesanan restoran, dan prediksi permintaan.',
    primary: 'Lihat proyek',
    secondary: 'Hubungi saya',
  },
  contact,
  cvLabel: 'Unduh CV',
  a11y: { skip: 'Lewati ke konten', navLabel: 'Utama' },
  seo: {
    description:
      'Portofolio Prasetyo Aji: sistem absensi, maintenance, dan pemesanan berbasis data.',
    ogAlt: 'Prasetyo Aji, Full-Stack Web Developer',
  },
  notFound: {
    title: 'Halaman tidak ditemukan',
    text: 'Alamat yang Anda buka tidak ada atau sudah dipindahkan. Kembali ke beranda untuk melihat proyek.',
    back: 'Kembali ke beranda',
  },
  skillsSection: {
    title: 'Skill dan pendidikan',
    marquee: 'Daftar skill',
    education: 'Pendidikan',
    certificates: 'Sertifikat',
    skills: 'Skill',
  },
  nav: [
    { label: 'Proyek', href: '/#proyek' },
    { label: 'Skill', href: '/#skill' },
    { label: 'Cara kerja', href: '/#cara-kerja' },
    { label: 'Kontak', href: '/#kontak' },
  ],
  links: [
    { label: 'Email', href: `mailto:${contact.email}`, value: contact.email },
    { label: 'WhatsApp', href: contact.whatsapp, value: contact.phone },
    { label: 'GitHub', href: contact.github, value: contact.github.slice(8) },
    {
      label: 'LinkedIn',
      href: contact.linkedin,
      value: contact.linkedin.slice(8),
    },
  ],
  contactSection: {
    title: 'Mari bekerja sama',
    text: 'Saya terbuka untuk Maganghub Batch 3B dan posisi Web Developer, IT Support, atau Data. Hubungi saya lewat salah satu kanal berikut.',
    copy: 'Salin email',
    copied: 'Tersalin',
    failed: 'Gagal menyalin, salin dari daftar',
  },
  // Angka dihitung dari data agar selalu bisa diverifikasi (BR-02).
  stats: [
    {
      value: projects.filter((p) => p.status !== 'coming-soon').length,
      label: 'Proyek',
    },
    {
      value: projects.filter((p) => p.repoUrl).length,
      label: 'Repositori publik',
    },
    { value: certificates.length, label: 'Sertifikat' },
  ],
  education: [
    {
      title: 'S1 Informatika, IPK 3,47',
      place: 'Universitas Bhayangkara Jakarta Raya',
      period: '2020–2026',
    },
    {
      title: 'Web Development Bootcamp',
      place: 'Infinite Learning Indonesia',
      period: '2022–2023',
    },
  ],
  certificates,
  skills: [
    {
      group: 'Frontend dan desain',
      items: [
        'React',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'JavaScript',
        'Figma',
        'GSAP',
      ],
    },
    {
      group: 'Backend dan data',
      items: [
        'Node.js',
        'Express',
        'REST API',
        'JWT',
        'MySQL',
        'SQLite',
        'PHP',
        'Gemini API',
      ],
    },
    {
      group: 'Dasar IT',
      items: ['Git/GitHub', 'Jaringan LAN', 'Linux', 'Troubleshooting'],
    },
  ],
  processSection: { title: 'Cara kerja' },
  process: [
    {
      title: 'Pahami kebutuhan',
      text: 'Siapa penggunanya, aturan bisnisnya apa, data apa yang dicatat.',
    },
    {
      title: 'Rancang alur dan database',
      text: 'Skema tabel, peran pengguna, dan alur status seperti tiket atau pesanan.',
    },
    {
      title: 'Bangun API',
      text: 'REST API dengan Express, autentikasi JWT, dan validasi input.',
    },
    {
      title: 'Bangun antarmuka',
      text: 'React dan Tailwind yang responsif, mulai dari wireframe Figma.',
    },
    {
      title: 'Uji dan rilis',
      text: 'Uji aturan bisnis dengan data simulasi, lalu deploy.',
    },
  ],
}
