# CLAUDE.md: Aturan kerja Portfolio Prasetyo Aji

Baca file ini di awal **setiap sesi**. Setelah itu baca `HANDOFF.md` (Task Board). Dari `STRUKTUR.md` (konten, stack, rute, spesifikasi animasi) dan `DESIGN.md` (tampilan, token, komponen) baca **hanya bagian yang tercantum di kolom Rujukan** unit yang dikerjakan, jangan membaca ulang seluruh dokumen. Jika ada konflik, `STRUKTUR.md` menang untuk konten, stack, dan rute, `DESIGN.md` menang untuk tampilan. Keduanya menang atas kebiasaan atau tebakan Anda.

## 1. Proyek

Situs portofolio pribadi **Prasetyo Aji** (Full-Stack Web Developer, fresh graduate S1 Informatika) untuk melamar **Maganghub Batch 3B** dan posisi Web Developer, IT Support, dan Data. Pembaca utamanya rekruter dan mentor teknis yang hanya memindai beberapa detik. Situs ini juga bukti kemampuan frontend, jadi animasi harus halus, tetapi **konten harus tetap cepat terbaca**.

- Stack: Next.js (App Router) + React + TypeScript + Tailwind CSS v4 + GSAP (ScrollTrigger, SplitText) + Lenis + Motion. Tanpa backend dan tanpa database.
- Bahasa UI: **Bahasa Indonesia**. Nama file, komponen, dan variabel: **bahasa Inggris** (D-01, karena repo ini dilihat rekruter).
- Gaya: gelap dengan aksen merah, tipografi besar, mengikuti `contoh-portfolio.jpg` dan prototipe `portfolio.html`. Detail di `DESIGN.md`.

## 2. Struktur dan perintah

```
portfolio-aji/
├── app/                layout.tsx, page.tsx, proyek/[slug]/page.tsx, not-found.tsx, globals.css
├── components/
│   ├── sections/       Hero, Projects, Skills, Process, Contact
│   ├── ui/             Button, Chip, Marquee, ProjectCard, Navbar, Footer
│   └── motion/         SmoothScroll, Reveal, SplitHeading, Counter, PageTransition, Preloader
├── lib/                gsap.ts (daftar plugin), motion.ts (token durasi dan easing), utils.ts
├── content/            projects.ts, profile.ts (satu-satunya sumber teks dan data)
├── public/             cv-prasetyo-aji.pdf, og.png, projects/<slug>/cover.webp
├── referensi/          contoh-portfolio.jpg, portfolio.html (hanya dibaca, tidak diubah)
├── CLAUDE.md  STRUKTUR.md  DESIGN.md  PERINTAH.md  HANDOFF.md
└── package.json
```

Perintah (harus ada dan berfungsi): `npm install`, `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`.

## 3. Aturan keras

1. Jangan menambah fitur di luar `STRUKTUR.md` bagian 2. **Dilarang:** backend atau database, CMS, login, blog, mode terang (kecuali diputuskan D-xx), Three.js atau WebGL (default D-04), musik atau suara otomatis, kursor kustom di layar sentuh, template bawaan yang dibiarkan apa adanya.
2. Jangan mengarang data: jumlah pengguna, klien, metrik performa, testimoni, tanggal, atau tautan demo. Semua proyek pribadi memakai data uji simulasi, **tulis apa adanya**. Data yang belum ada pakai placeholder yang jelas dan catat di `HANDOFF.md`.
3. Proyek **privat atau milik klien** (Wonderfool, Berkah Mobilindo) tidak boleh menampilkan kode, tangkapan layar, atau nama internal tanpa izin pemilik. Tampilkan deskripsi umum dan status.
4. Jangan membuka atau meng-commit `.env`. Jika kelak ada, sediakan `.env.example`.
5. Semua teks dan data tampil dari `content/`. Dilarang menulis ulang teks yang sama di komponen.
6. Saat ada hal belum diputuskan, pakai default `D-xx` di `STRUKTUR.md` bagian 3 dan **sebutkan** di jawaban.
7. Setiap perubahan besar: sebut kode `PB-xx` atau `BR-xx` yang dipenuhi.

### Gaya kode: simple, minimalis, padat (wajib)

Tulis seperti **engineer senior**: solusi paling sederhana yang benar, tidak lebih dari yang diminta unit. Tujuan: sesedikit mungkin file, baris, dan dependensi (hemat token), tetapi tetap mudah dibaca. Padat bukan berarti cerdik: dilarang one-liner yang membuat bingung.

1. **Tulis hanya yang dipakai.** Tidak ada abstraksi, helper, wrapper, atau prop untuk kemungkinan masa depan. Abstraksi baru boleh dibuat setelah dipakai **minimal dua kali**.
2. **Ukuran:** fungsi ≤ 30 baris, komponen ≤ 120 baris. Jika lebih, pecah atau sederhanakan. Satu komponen satu file, nama file = nama komponen, tanpa file `index.ts` perantara kecuali benar-benar perlu.
3. **Dependensi:** hanya yang tercantum di `STRUKTUR.md` §2.2 ditambah `lucide-react`. Menambah paket baru harus disebut di jawaban beserta alasannya. Untuk hal kecil, tulis sendiri, jangan pasang paket.
4. **Server Component sebagai bawaan.** `"use client"` hanya pada komponen yang memang butuh animasi atau interaksi, dan sekecil mungkin cakupannya.
5. **Gaya lewat utility Tailwind.** Tanpa file CSS terpisah dan tanpa CSS-in-JS. Kustom CSS hanya di `globals.css`.
6. **State:** `useState` atau `useRef` lokal. Tanpa pustaka state, context, atau reducer kecuali ada kebutuhan nyata.
7. **TypeScript:** biarkan inferensi bekerja, beri tipe hanya di batas (props dan data `content/`). Tanpa `any`. Tanpa enum, gunakan union string.
8. **Komentar hanya untuk "kenapa"**, bukan "apa". Tidak ada kode mati, `console.log`, atau `TODO` yang tertinggal di akhir sesi.
9. **Data dan teks tidak diketik ulang**: ambil dari `content/` (BR-01). Perulangan dibuat dengan `map`, bukan menyalin blok.
10. **Hemat token saat bekerja:** ubah file dengan edit kecil (bukan tulis ulang seluruh file), jangan membaca ulang file yang baru ditulis, jangan menjelaskan kode panjang di chat, dan jangan membuat varian atau opsi cadangan yang tidak diminta.

## 4. Aturan UI dan animasi (wajib)

Ringkasan aturan. Nilai dan spesifikasi lengkap ada di `DESIGN.md` (token §2, gerak §5, komponen §6, larangan §12).

1. **Konten dulu, animasi kedua.** Halaman harus terbaca penuh jika JavaScript gagal atau pengguna memilih `prefers-reduced-motion`. Keadaan awal "tersembunyi" hanya dipasang oleh JS (kelas `js` di `<html>`), bukan lewat CSS bawaan.
2. **Pembagian tugas pustaka.** GSAP untuk timeline, scroll, dan teks. Motion untuk komponen React (muncul/hilang, hover, transisi halaman). Lenis hanya untuk scroll halus. **Jangan memakai dua pustaka pada elemen yang sama.**
3. Semua GSAP dibuat di dalam `useGSAP` (dari `@gsap/react`) dengan `scope` dan pembersihan otomatis. Plugin didaftarkan sekali di `lib/gsap.ts`.
4. Lenis dan ScrollTrigger disinkronkan satu kali di `SmoothScroll`. Tidak ada `requestAnimationFrame` liar di komponen.
5. **Hanya animasikan `transform`, `opacity`, `clip-path`, dan `filter` seperlunya.** Dilarang menganimasikan `width`, `height`, `top`, `left`, `margin`.
6. **Reduced motion:** matikan Lenis, scrub, parallax, dan preloader lewat `gsap.matchMedia()` dan `useReducedMotion`. Konten tetap tampil utuh.
7. **Satu momen unggulan: Hero.** Section lain tenang. Dilarang pola umum "fade-up pada setiap section" dan efek hover pada setiap kartu. Gerak harus menjawab aksi pengguna atau menarik perhatian pada satu hal. Ikuti `DESIGN.md` bagian 9 dan 12.
8. Maksimal **2 section dengan pin/scrub**. Kursor kustom dan efek magnetik hanya untuk perangkat `hover: hover` dan `pointer: fine`.
9. Durasi dan easing hanya dari token di `lib/motion.ts` (nilai di `DESIGN.md` §5). Warna dan font dari token di `globals.css` (`@theme`, nilai di `DESIGN.md` §2), tanpa hex di komponen.
10. Semua elemen interaktif: elemen semantik (`a`, `button`), target sentuh minimal 44 px, fokus terlihat, urutan tab logis. Tautan eksternal `rel="noopener noreferrer"`.
11. Gambar lewat `next/image`, font lewat `next/font`. Setiap gambar punya `alt` yang bermakna.
12. Responsif dari 360 sampai 1440 px, tanpa scroll horizontal.
13. **Anggaran performa:** JS awal beranda ≤ 200 KB gzip, LCP ≤ 2,5 s, CLS ≤ 0,1, Lighthouse mobile Performa ≥ 90 dan Aksesibilitas ≥ 95. Jika animasi melanggar, **animasinya yang dikurangi**.

## 5. Aturan kerja bertahap (WAJIB, anti-limit)

Daftar pekerjaan ada di `HANDOFF.md` → **Task Board** (U1, U2, ...). Kerja kecil yang utuh lebih baik daripada kerja besar yang terpotong.

1. **Kuota per sesi: maksimal 2 unit ringan, atau 1 unit jika bertanda 🔥.** Jangan melebihi.
2. Kerjakan unit **berurutan**, kecuali pemilik meminta lain. Jangan menyentuh unit lain.
3. Mulai hanya unit yang bisa **diselesaikan penuh**. Jika terpaksa setengah, tandai 🟡 dan tulis persis file yang tersisa.
4. Tulis rencana file maksimal 5 baris, lalu **langsung kerjakan** tanpa menunggu persetujuan.
5. Tulis file lewat tool. **Jangan menampilkan isi kode di chat.** Jangan menulis ulang file yang sudah selesai, ubah seperlunya.
6. Terasa mendekati batas: berhenti pada batas file yang utuh, perbarui `HANDOFF.md`, kirim ZIP.
7. Verifikasi yang tersedia: `npm run typecheck`, `npm run lint`, `npm run build`. Jika tidak bisa dijalankan (sandbox offline), **jangan klaim lulus**, tulis "belum dijalankan" di `HANDOFF.md`. Animasi hanya bisa dinilai di browser: tulis "belum dilihat di browser" bila memang belum.
8. Aset atau data belum ada: pakai placeholder, catat di `HANDOFF.md`.
9. Jangan membuat README panjang, laporan, atau dokumen tambahan kecuali diminta.

### Akhir sesi
1. Perbarui `HANDOFF.md`: status unit di Task Board, lalu tambahkan entri Changelog **di atas** riwayat lama (file baru, file diedit, keputusan, default `D-xx`, apa yang belum dijalankan, risiko). Jangan menghapus riwayat.
2. Buat **ZIP lengkap** `portfolio-aji.zip` dengan folder induk `portfolio-aji/`. Jangan sertakan `node_modules/`, `.next/`, dan `.env`. Tampilkan dengan `present_files`.
3. Balasan akhir hanya format ini, lalu **berhenti**:

```
Selesai     : U?, U?
Berikut     : U?, U?
Butuh user  : (aset atau keputusan)
Belum dites : (apa yang belum dijalankan atau dilihat di browser)
Default D-xx: (yang dipakai)
File ZIP    : portfolio-aji.zip (lengkap)
```

### Serah-terima (menimpa)
1. Pemilik memberi `portfolio-aji.zip` ke chat baru, atau menjalankan `claude` di folder proyek.
2. Claude mengekstrak, membaca sesuai urutan, bekerja.
3. Claude mengembalikan **ZIP lengkap**, bukan sebagian. Apa pun yang tidak ada di ZIP baru dianggap hilang.
4. Pemilik mengekstrak dan **menimpa** folder lama, lalu `npm install` bila `package.json` berubah.

## 6. Cara menjawab

- Bahasa Indonesia, singkat, tanpa basa-basi.
- Sebutkan default `D-xx` yang dipakai dan asumsi baru. Jangan menyembunyikannya.
- Jika menemukan konflik antara dokumen dan permintaan, tulis konfliknya dalam satu kalimat dan pilih sisi yang aman (dokumen), jangan diam-diam menyimpang.

## 7. Checklist sebelum menyatakan selesai

- [ ] `npm run typecheck`, `npm run lint`, dan `npm run build` lulus tanpa galat dan tanpa peringatan konsol.
- [ ] Halaman terbaca penuh dengan JS dimatikan dan dengan `prefers-reduced-motion: reduce`.
- [ ] Tidak ada hex, durasi, atau easing literal di komponen. Tidak ada teks yang diketik ulang di luar `content/`.
- [ ] Gaya kode (bagian 3): tidak ada kode mati atau abstraksi yang belum dipakai dua kali, fungsi ≤ 30 baris, komponen ≤ 120 baris, tidak ada dependensi di luar daftar.
- [ ] Tidak ada data karangan (metrik, klien, tautan demo). Proyek privat tidak membocorkan kode atau tangkapan layar.
- [ ] Diuji di lebar 360, 768, 1024, 1440 tanpa scroll horizontal. Diuji dengan keyboard saja.
- [ ] Lolos checklist QA visual `DESIGN.md` bagian 13.
- [ ] Animasi tetap 60 fps di panel Performance (tidak ada layout thrashing). Lighthouse sesuai anggaran §4.13.
- [ ] `HANDOFF.md` terbarui (Task Board dan Changelog). ZIP lengkap, tanpa `node_modules`, `.next`, `.env`.
