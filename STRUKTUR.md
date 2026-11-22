# STRUKTUR.md: Fondasi Proyek Portfolio Prasetyo Aji

> Sumber kebenaran untuk **tujuan, stack, struktur, konten, dan perilaku animasi**. Untuk tampilan (token, komponen, nilai gerak) lihat `DESIGN.md`, untuk aturan kerja lihat `CLAUDE.md`, untuk daftar pekerjaan lihat `HANDOFF.md`, untuk prompt siap pakai lihat `PERINTAH.md`.

## 0. Cara memakai dokumen ini

- Baca bagian yang tercantum di kolom Rujukan unit di `HANDOFF.md`, jangan seluruhnya.
- Tanda: **[TERKUNCI]** sudah diputuskan pemilik. **[DEFAULT]** boleh dipakai sampai pemilik memutuskan. **[SARAN]** boleh disesuaikan jika ada alasan kuat (sebutkan di jawaban).
- Referensi visual di `referensi/`: `contoh-portfolio.jpg` (arah gaya) dan `portfolio.html` (prototipe statis dengan isi nyata). Prototipe boleh ditiru isi dan susunannya, bukan kodenya.

## 1. Ringkasan proyek

| Item | Isi |
|---|---|
| Pemilik | Prasetyo Aji, S.Kom. (Bekasi, Jawa Barat) |
| Tujuan | Melamar Maganghub Batch 3B dan posisi Web Developer, IT Support, Data |
| Pembaca | Rekruter dan mentor teknis. Memindai 10 sampai 30 detik, lalu membuka 1 sampai 2 proyek |
| Pekerjaan utama situs | (1) Menunjukkan 3 sampai 4 proyek terbaik dengan jelas, (2) menunjukkan kualitas frontend lewat gerak yang halus, (3) memudahkan kontak dan unduh CV |
| Nada | Percaya diri, jujur, ringkas. Tidak membesar-besarkan |

## 2. Keputusan desain

### 2.1 Terkunci [TERKUNCI]
- **PB-01** Satu halaman utama berisi Hero, Proyek pilihan, Skill dan pendidikan, Cara kerja, Kontak.
- **PB-02** Halaman detail per proyek di `/proyek/[slug]` untuk proyek unggulan.
- **PB-03** Tombol Unduh CV (`/cv-prasetyo-aji.pdf`) dan kontak (email, WhatsApp, LinkedIn, GitHub) selalu mudah dijangkau.
- **PB-04** Animasi halus dan interaktif, tetapi tidak menghalangi membaca (lihat §7 dan CLAUDE §4).
- **PB-05** Statis penuh (SSG), tanpa backend dan database. Deploy ke Vercel.
- **BR-01** Semua teks dan data dari `content/`. Satu sumber.
- **BR-02** Tidak ada data karangan. Proyek pribadi memakai data uji simulasi dan ditulis begitu.
- **BR-03** Proyek privat atau klien tidak membocorkan kode atau tangkapan layar tanpa izin.

### 2.2 Stack [TERKUNCI] dan alasannya

| Lapisan | Pilihan | Peran |
|---|---|---|
| Kerangka | **Next.js (App Router)** + React + TypeScript | SSG, routing, `next/image`, `next/font`, SEO. Sama dengan stack Wonderfool |
| Gaya | **Tailwind CSS v4** (`@theme` untuk token) | Cepat, konsisten, token di satu tempat |
| Animasi timeline dan scroll | **GSAP** + ScrollTrigger + SplitText (`@gsap/react`) | Kontrol penuh urutan, scrub, pin, animasi teks |
| Animasi komponen | **Motion** (`motion/react`) | Muncul/hilang, hover, transisi halaman, layout |
| Scroll halus | **Lenis** | Scroll berinersia, disinkronkan ke ScrollTrigger |
| Ikon | `lucide-react` | Ringan |
| Kualitas | ESLint, Prettier, `tsc --noEmit` | Gerbang sebelum selesai |
| Hosting | Vercel (Hobby) | Gratis, deploy dari GitHub |

**Tidak dipakai [DEFAULT D-04]:** Three.js / React Three Fiber (berat, jarang sebanding untuk rekruter), CMS, database, pustaka UI besar (shadcn boleh hanya jika dibutuhkan, tidak sebagai dasar).

## 3. Keputusan terbuka (dengan default agar pekerjaan tidak berhenti)

| Kode | Pertanyaan | Default yang dipakai |
|---|---|---|
| D-01 | Bahasa nama file dan kode | Inggris. Teks UI Indonesia |
| D-02 | Dua bahasa (ID/EN)? | Tidak. Indonesia saja, siapkan `content/` agar mudah diterjemahkan |
| D-03 | Mode terang? | Tidak. Gelap saja |
| D-04 | Elemen 3D? | Tidak |
| D-05 | Foto profil | Placeholder inisial "PA" sampai foto diberikan |
| D-06 | Formulir kontak | Tidak ada form. Tombol email, WhatsApp, salin email |
| D-07 | Proyek unggulan (dapat halaman detail) | Attendance System, Maintenance System, Warkopolo |
| D-08 | Domain | `*.vercel.app` dulu, domain sendiri menyusul |
| D-09 | Preloader | Singkat (≤ 1,2 s), dilewati pada kunjungan berulang dan saat reduced motion |
| D-10 | Cursor kustom | Hanya titik kecil di desktop, mati di sentuh |
| D-11 | Versi Next.js | Stabil terbaru saat U1 (16.4.6), bukan 15 seperti Wonderfool |

## 4. Hasil akhir sistem

### 4.1 Alur pengunjung
1. Mendarat di Hero: nama, peran, satu kalimat nilai, dua tombol (Lihat proyek, Hubungi saya).
2. Menggulir ke Proyek pilihan, membuka satu proyek (halaman detail) atau tombol Lihat kode di GitHub.
3. Melihat skill dan cara kerja, lalu Kontak, atau Unduh CV kapan saja dari Navbar.

### 4.2 Keterkaitan dengan tujuan
Tiap unit di `HANDOFF.md` harus melayani salah satu dari tiga pekerjaan di §1. Jika sebuah efek tidak melayani satu pun, buang.

## 5. Struktur proyek

### 5.1 Folder [SARAN]

```
portfolio-aji/
├── referensi/                contoh-portfolio.jpg, portfolio.html
├── CLAUDE.md  STRUKTUR.md  DESIGN.md  PERINTAH.md  HANDOFF.md
├── app/
│   ├── layout.tsx            font, metadata, SmoothScroll, PageTransition
│   ├── page.tsx              menyusun section beranda
│   ├── proyek/[slug]/page.tsx   detail proyek (generateStaticParams dari content)
│   ├── not-found.tsx
│   └── globals.css           @theme (token), dasar, kelas .js
├── components/
│   ├── sections/             Hero, Projects, Skills, Process, Contact
│   ├── ui/                   Button, Chip, Marquee, ProjectCard, Navbar, Footer
│   └── motion/               SmoothScroll, Reveal, SplitHeading, Counter, PageTransition, Preloader
├── lib/
│   ├── gsap.ts               registerPlugin sekali (ScrollTrigger, SplitText, useGSAP)
│   ├── motion.ts             token durasi dan easing
│   └── utils.ts
├── content/
│   ├── profile.ts            nama, peran, ringkasan, kontak, pendidikan, sertifikat, skill
│   └── projects.ts           daftar proyek bertipe `Project`
└── public/
    ├── cv-prasetyo-aji.pdf
    ├── og.png                1200×630
    └── projects/<slug>/cover.webp
```

### 5.2 Rute

| Rute | Isi |
|---|---|
| `/` | Beranda (semua section) |
| `/proyek/[slug]` | Detail proyek unggulan |
| `/404` | `not-found.tsx` dengan tautan kembali |

### 5.3 Pembagian tanggung jawab
- `content/` hanya data, tanpa JSX.
- `components/sections` menyusun layout dan memanggil `components/motion` dan `components/ui`.
- `components/motion` membungkus perilaku animasi yang bisa dipakai ulang. Section tidak menulis timeline GSAP panjang sendiri kecuali unik (Hero, Process).

## 6. Model data

```ts
// content/projects.ts
export type Project = {
  slug: string
  name: string
  kind: string              // "Sistem absensi", "E-commerce", ...
  summary: string           // 1 kalimat, tampil di kartu
  description?: string      // paragraf di halaman detail
  role: string              // peran Anda (jelas jika proyek tim)
  stack: string[]
  status: 'live' | 'repo' | 'private' | 'coming-soon'
  featured: boolean         // true = dapat halaman detail (D-07)
  repoUrl?: string
  demoUrl?: string          // hanya jika benar-benar ada
  cover?: string            // /projects/<slug>/cover.webp
  highlights?: string[]     // butir hasil yang benar (BR-02)
  note?: string             // mis. "Data uji simulasi"
}
```

## 7. Spesifikasi animasi [SARAN, tiap baris adalah kontrak]

Nilai durasi, easing, dan Lenis ada di `DESIGN.md` §5 dan disimpan di `lib/motion.ts`. Tabel di bawah menetapkan **apa yang bergerak, dengan pustaka apa, dan fallback-nya**. Tampilan lengkap tiap section ada di `DESIGN.md` §8.

| Bagian | Efek | Pustaka | Fallback reduced motion |
|---|---|---|---|
| Preloader (D-09) | Nama muncul, tirai terangkat, ≤ 1,2 s, sekali per sesi | GSAP | Dilewati |
| **Hero (momen unggulan)** | Teks raksasa "PORTFOLIO" terungkap per huruf dengan topeng gradasi; nama masuk per karakter; angka statistik menghitung; sedikit parallax pada teks latar saat scroll | GSAP + SplitText + ScrollTrigger | Tampil statis langsung |
| Navbar | Menyembunyikan diri saat scroll turun, muncul saat naik; garis kemajuan scroll tipis | Motion / GSAP | Tetap tampil, tanpa garis |
| Proyek pilihan | Kartu masuk berurutan satu kali; hover: sampul bergeser halus dan label "Lihat" muncul; klik membuka halaman detail dengan transisi | Motion | Tanpa gerak, hanya perubahan warna |
| Transisi halaman | Tirai merah menutup lalu membuka; konten detail masuk | Motion `AnimatePresence` | Pindah langsung |
| Skill dan pendidikan | Marquee skill lambat, berhenti saat hover/fokus; daftar pendidikan muncul tenang | CSS/GSAP | Marquee berhenti, daftar statis |
| **Cara kerja (pin/scrub #1)** | Lima langkah: panel di-pin, langkah aktif berganti sesuai scroll dengan garis penghubung terisi | GSAP ScrollTrigger | Daftar vertikal biasa |
| Kontak | Judul besar terungkap; tombol salin email memberi umpan balik "Tersalin"; efek magnetik halus pada tombol utama (hanya `hover: hover`) | GSAP / Motion | Tanpa magnetik |
| Cursor (D-10) | Titik kecil mengikuti pointer, membesar di atas tautan | GSAP `quickTo` | Dimatikan |

Aturan: maksimal 2 pin/scrub (Hero parallax ringan dan Cara kerja). Jangan menambah pin ketiga.

## 8. Konten (dari CV dan repositori GitHub)

### 8.1 Profil
- Nama: Prasetyo Aji, S.Kom. · Bekasi, Jawa Barat
- Peran: Full-Stack Web Developer (terbuka untuk IT Support, IT Staff, Data)
- Ringkasan: Lulusan S1 Informatika (IPK 3,47/4,00) dan SMK TKJ. Membangun sistem berbasis data: absensi, maintenance, pemesanan restoran, prediksi permintaan. Berpengalaman di administrasi dan document control.
- Kontak: `prasetyoaji23yo@gmail.com` · WhatsApp +62 882-9024-8798 · `linkedin.com/in/prasetyoaji07` · `github.com/prasetyoaji07`
- Pendidikan: S1 Informatika, Universitas Bhayangkara Jakarta Raya (Agu 2020 sampai Feb 2026), IPK 3,47
- Sertifikat: LSP Junior Web Development (BNSP, 2026) · RevoU Intro to Data Analytics (2026) · Web Development, Infinite Learning (2023)
- Skill: JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, Express, REST API, JWT, MySQL/SQL, SQLite, PHP, Git/GitHub, Figma, GSAP, Jaringan dasar, Linux

### 8.2 Proyek (slug, status, unggulan)

| Slug | Nama | Status | Unggulan | Catatan jujur |
|---|---|---|---|---|
| `attendance-system` | Attendance System | repo | ya | Absensi shift: JWT, roster, QR dinamis, GPS geofencing, device binding. Data uji simulasi |
| `maintenance-system` | Maintenance & Spare Part | repo | ya | Tiket multitahap, peran, preventive maintenance, QR mesin, dashboard MTTR dan downtime, prediksi part (WMA). Data uji simulasi |
| `warkopolo` | Warkopolo | repo | ya | Aplikasi pelanggan + kasir + REST API, pembatalan booking otomatis, meja transaksional |
| `technova-ecommerce` | TechNova | repo | tidak | Backend Express 5 + SQLite + Gemini API, frontend vanilla JS. Berawal dari tes Maganghub |
| `mulai-bot-gratiz` | Mulai Bot Gratiz | repo | tidak | Chatbot gizi, proyek akhir Hacktiv8, Gemini API |
| `kecaknik-food` | Kecaknik Food | repo | tidak | Sistem pemesanan makanan untuk satu brand: pelanggan tanpa akun, satu admin, pembayaran transfer/tunai/split, status pesanan, laporan, tombol WhatsApp. Berbasis npm workspaces (backend, customer-app, admin-app, shared). **Konfirmasi dulu apakah boleh dipublikasikan dan apa perannya** |
| `setujuan-coffee` | Prediksi Produk Setujuan Coffee | repo | tidak | Skripsi. PHP, MySQL, WMA, Highcharts |
| `berkah-mobilindo` | Berkah Mobilindo | private | tidak | Freelance. Izin klien dahulu (BR-03) |
| `wonderfool` | Wonderfool | coming-soon | tidak | Privat, brand bersama teman. Hanya status "segera hadir" |

Urutan di beranda: tiga unggulan dulu, lalu sisanya dalam grid lebih kecil atau tombol "Lihat semua".

### 8.3 Nada tulisan
Kalimat aktif, konkret, tanpa kata promosi. Tulis apa yang Anda kerjakan sendiri. Contoh baik: "Membangun validasi check-in dengan QR dinamis dan geofencing." Contoh buruk: "Solusi inovatif kelas dunia."

## 9. Anggaran performa dan aksesibilitas

| Metrik | Target |
|---|---|
| JS awal beranda | ≤ 200 KB gzip |
| LCP (mobile) | ≤ 2,5 s |
| CLS | ≤ 0,1 |
| Lighthouse mobile | Performa ≥ 90, Aksesibilitas ≥ 95, SEO ≥ 95 |
| Gambar | WebP/AVIF, lebar sesuai, `priority` hanya untuk LCP |
| Font | Maks 2 keluarga, `next/font`, `display: swap` |

Aksesibilitas: kontras teks ≥ 4,5:1, fokus terlihat, urutan tab logis, `aria-label` pada tombol ikon, animasi tidak mengandung kilatan, ada tautan "Lewati ke konten".

## 10. SEO dan deploy
- Metadata per halaman (`generateMetadata`), `og.png`, `sitemap.ts`, `robots.ts`, tag `lang="id"`.
- Data terstruktur `Person` (JSON-LD) di beranda.
- Deploy: hubungkan repo GitHub ke Vercel, cabang `main` ke produksi. Cek tampilan di HP sungguhan sebelum mengirim tautan ke rekruter.

## 11. Risiko

| Risiko | Penanganan |
|---|---|
| Animasi berat di HP kelas menengah | Anggaran §9, pin maksimal 2, matikan efek pointer di sentuh |
| FOUC / konten tak terlihat saat JS lambat | Keadaan awal dipasang JS (CLAUDE §4.1), uji dengan JS dimatikan |
| Konflik Lenis dan ScrollTrigger | Satu sinkronisasi di `SmoothScroll` (CLAUDE §4.4) |
| Dua pustaka animasi saling timpa | Aturan pembagian tugas (CLAUDE §4.2) |
| Klaim berlebihan di proyek pribadi | BR-02, tulis "data uji simulasi" |
| Kebocoran proyek klien | BR-03 |

## Lampiran A: Token desain

Pindah ke `DESIGN.md` §2 (warna, font, wadah) dan §3 (skala tipografi) agar ada satu sumber kebenaran. Jangan menyalin nilainya ke dokumen ini.
