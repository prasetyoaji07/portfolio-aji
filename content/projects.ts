export type Project = {
  slug: string
  name: string
  kind: string
  summary: string
  description?: string
  role: string
  stack: string[]
  status: 'live' | 'repo' | 'private' | 'coming-soon'
  featured: boolean
  repoUrl?: string
  demoUrl?: string
  cover?: string
  highlights?: string[]
  note?: string
}

const gh = (repo: string) => `https://github.com/prasetyoaji07/${repo}`

export const projects: Project[] = [
  {
    slug: 'attendance-system',
    name: 'Attendance System',
    kind: 'Sistem absensi',
    summary:
      'Absensi karyawan berbasis shift dengan QR dinamis, GPS geofencing, dan device binding.',
    role: 'Proyek pribadi, dikerjakan sendiri',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MySQL (TiDB Cloud)',
      'Tailwind CSS',
      'JWT',
    ],
    status: 'repo',
    cover: '/projects/attendance.png',
    featured: true,
    repoUrl: gh('attendance-system'),
    highlights: [
      'Autentikasi JWT, penjadwalan roster, dan pengelolaan status kehadiran.',
      'Validasi check-in dan check-out dengan QR dinamis, GPS geofencing, dan device binding.',
      'Aturan bisnis dan database diuji dengan data simulasi.',
    ],
    note: 'Data uji simulasi.',
  },
  {
    slug: 'maintenance-system',
    name: 'Maintenance & Spare Part',
    kind: 'Sistem maintenance',
    summary:
      'Tiket maintenance multitahap, preventive maintenance otomatis, dan prediksi kebutuhan spare part.',
    role: 'Proyek pribadi, dikerjakan sendiri',
    stack: [
      'React 19',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Recharts',
      'Express',
      'MySQL (TiDB Cloud)',
      'JWT',
    ],
    status: 'repo',
    cover: '/projects/maintenance.png',
    featured: true,
    repoUrl: gh('maintenance-system'),
    highlights: [
      'Login JWT dengan hak akses per peran.',
      'Alur tiket multitahap: laporan via QR, surat TTD Foreman dan SPV, penugasan mekanik, persetujuan part.',
      'Jadwal preventive maintenance otomatis, QR per mesin, dashboard MTTR dan downtime, laporan bulanan.',
      'Prediksi kebutuhan part dengan Weighted Moving Average dan backtest.',
    ],
    note: 'Data uji simulasi.',
  },
  {
  slug: 'wonderfool',
  name: 'Wonderfool',
  kind: 'Toko online brand pakaian',
  summary:
    'Website toko online untuk brand pakaian sendiri: katalog, keranjang, dan pemesanan lewat WhatsApp, dengan animasi scroll.',
  role: 'Proyek pribadi, brand dan website dikerjakan sendiri',
  stack: [
    'Next.js 15',
    'TypeScript',
    'Tailwind CSS',
    'GSAP',
    'Zustand',
    'React 19',
  ],
  status: 'repo',
  featured: true,
  cover: '/projects/WF.png',  
  highlights: [
    'Beranda, katalog produk, dan keranjang dengan pilihan ukuran; isi keranjang tersimpan di browser (Zustand).',
    'Keranjang otomatis menjadi pesan WhatsApp berisi item, ukuran, dan total.',
    'Animasi scroll dan transisi halaman dengan GSAP dan Lenis, mengikuti sistem desain sendiri (token warna, font, spasi).',
  ],
  note: 'Brand belum dirilis.',
},
  {
    slug: 'technova-ecommerce',
    name: 'TechNova',
    kind: 'E-commerce smartphone',
    summary:
      'Backend toko smartphone dengan Express 5, SQLite, dan integrasi Gemini API.',
    role: 'Pengembang',
    stack: ['Node.js', 'Express 5', 'SQLite', 'Gemini API', 'Vanilla JS'],
    status: 'repo',
    featured: false,
    repoUrl: gh('technova-ecommerce'),
  },
  {
    slug: 'mulai-bot-gratiz',
    name: 'Mulai Bot Gratiz',
    kind: 'Chatbot gizi',
    summary:
      'Chatbot asisten gizi dan makan sehat berbasis Gemini API, proyek akhir Hacktiv8.',
    role: 'Pengembang',
    stack: ['Node.js', 'Express', 'Vanilla JS', 'Gemini API'],
    status: 'repo',
    featured: false,
    repoUrl: gh('mulai-bot-gratiz'),
  },
  {
    slug: 'kecaknik-food',
    name: 'Kecaknik Food',
    kind: 'Sistem pemesanan makanan',
    summary:
      'Pemesanan makanan untuk satu brand: pelanggan tanpa akun, satu admin, pembayaran transfer atau tunai.',
    role: 'Pengembang',
    stack: ['React', 'Vite', 'Express', 'MariaDB', 'Leaflet'],
    status: 'repo',
    featured: false,
    repoUrl: gh('kecaknik-food'),
  },
   {
  slug: 'warkopolo',
  name: 'Warkopolo',
  kind: 'Sistem pemesanan restoran',
  summary:
    'Aplikasi pelanggan, aplikasi kasir, dan REST API untuk pemesanan restoran.',
  role: 'Proyek pribadi, dikerjakan sendiri',
  stack: [
    'React (Vite)',
    'Node.js',
    'Express',
    'MySQL (Aiven Cloud)',
    'Git/GitHub',
  ],
  status: 'repo',
  featured: false,
  repoUrl: gh('warkopolo'),
  highlights: [
    'Alur status pesanan, validasi input, dan pengelolaan meja secara transaksional.',
    'Pembatalan booking yang tidak hadir, penyelesaian pesanan, dan pengosongan meja otomatis.',
  ],
},
  {
    slug: 'setujuan-coffee',
    name: 'Prediksi Produk Setujuan Coffee',
    kind: 'Skripsi',
    summary:
      'Prediksi permintaan produk dengan Weighted Moving Average dan grafik interaktif Highcharts.',
    role: 'Penulis skripsi dan pengembang',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'jQuery', 'Highcharts'],
    status: 'private',
    featured: false,
  },
  {
    slug: 'berkah-mobilindo',
    name: 'Berkah Mobilindo',
    kind: 'Proyek freelance',
    summary:
      'Proyek freelance untuk klien Berkah Mobilindo, dibangun dengan Next.js dan MariaDB.',
    role: 'Pengembang freelance',
    stack: ['Next.js', 'JavaScript', 'MariaDB'],
    status: 'private',
    featured: false,
    note: 'Proyek klien: kode dan tampilan tidak dipublikasikan.',
  },
]

export const copy = {
  title: 'Proyek pilihan',
  detail: 'Lihat detail',
  code: 'Lihat kode',
  view: 'Lihat',
  coverAlt: 'Tangkapan layar',
  back: 'Kembali ke proyek',
  publicRepo: 'Repositori publik',
  summary: 'Ringkasan',
  role: 'Peran saya',
  flow: 'Alur utama',
  note: 'Catatan',
  stack: 'Stack',
  links: 'Tautan',
  demo: 'Buka demo',
  next: 'Proyek berikutnya',
}

// Hanya status yang perlu label; proyek dengan repositori publik tidak.
export const statusLabel: Partial<Record<Project['status'], string>> = {
  private: 'Proyek privat',
  'coming-soon': 'Segera hadir',
}
