# HANDOFF: Portfolio Prasetyo Aji

> Update di akhir setiap sesi. Jangan hapus riwayat lama, tambahkan di atas.

## Changelog
- **Sesi 14 (U19, audit statis):**
  - Dikerjakan sebagai audit kode tanpa browser (PERINTAH §7 butir 1, 2, 4, 6, 7, 9). Butir 3 (JS mati, reduced motion), 5 (scroll horizontal), 8 (JS awal, LCP, CLS) **belum bisa diaudit** dan menunggu U15 dan U17.
  - File diedit: `content/profile.ts` (+`a11y`: teks "Lewati ke konten" dan label navigasi "Utama"), `app/layout.tsx`, `components/ui/Navbar.tsx` (memakai `a11y`), `HANDOFF.md`. Tidak ada fitur berubah.
  - **Lolos:** (1) tidak ada hex, durasi, easing, delay, atau stagger literal di `app/`, `components/`, `lib/` selain `lib/motion.ts` dan `globals.css`; (2) satu-satunya teks literal di luar `content/` adalah dua string di atas (sudah dipindah), lainnya dari `content/`; (4) pin/scrub tepat 2 (Hero parallax, Cara kerja), tidak ada pustaka ganda pada satu elemen; (6) proyek `private` dan `coming-soon` tanpa `repoUrl`, `demoUrl`, `cover`; komponen juga menjaga BR-03; statistik Hero (8, 6, 3) cocok dengan data; (7) satu `h1` per halaman, tanpa bayangan selain titik status Navbar (diizinkan DESIGN §4), tanpa emoji, tanpa `<img>`, tanpa titik-tengah, tanpa nomor dekoratif, tanpa `console`, `TODO`, `any`; (9) semua `"use client"` memang perlu, tidak ada ekspor yang hanya dipakai sekali (selain konvensi Next), `cn` dipakai dua kali, komponen ≤ 120 baris (terpanjang: halaman detail ±113), tidak ada dependensi di luar daftar (`lucide-react` belum dipasang karena belum dipakai).
  - **Butuh keputusan Anda (tidak saya ubah):**
    1. **Callback `useGSAP` melebihi 30 baris** (CLAUDE §3.2): `HeroMotion` ±59, `ProcessMotion` ±33, `CursorDot` ±45. Memecahnya berisiko merusak gerak yang belum pernah dilihat di browser, jadi saya tunda sampai gerak terverifikasi (U15). Pilihan: biarkan (callback animasi wajar panjang) atau pecah menjadi fungsi kecil.
    2. **Gradasi `bg-linear-160` pada placeholder sampul `ProjectCard`** (DESIGN §4 hanya mengizinkan gradasi untuk topeng Hero dan latar kotak foto). Ini placeholder sementara dan hilang saat `cover` terisi; biarkan atau ganti warna polos.
    3. **Hover `scale-105` pada sampul `ProjectCard`**: sesuai STRUKTUR §7 ("sampul bergeser halus"), hanya pada sampul, bukan pada seluruh kartu. Dianggap sah; tandai bila ingin dihapus.
    4. **Nama klien "Berkah Mobilindo"** tampil sebagai nama proyek: izin pemilik masih menunggu (BR-03, sudah di tabel aset).
  - **Belum dijalankan:** `typecheck`, `lint`, `build`; pemeriksaan sintaks `tsc` untuk file yang diubah lolos. U19 **diulang singkat setelah U15, U17, U18** (butir 3, 5, 8 dan hasil Lighthouse).
  - Default D-xx baru: tidak ada.
- **Sesi 13 (U16; U15 dilewati, lihat catatan):**
  - File baru: `lib/site.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`, `public/og.png` (1200×630), `app/icon.png` (512), `app/apple-icon.png` (180), `.env.example`.
  - File dihapus: `app/favicon.ico` (logo bawaan scaffold; digantikan `icon.png` monogram "PA" merah).
  - File diedit: `app/layout.tsx` (metadata penuh: `metadataBase`, Open Graph, Twitter `summary_large_image`; teks dari `content/`), `app/page.tsx` (canonical `/` dan JSON-LD `Person`), `app/proyek/[slug]/page.tsx` (canonical dan Open Graph per proyek), `content/profile.ts` (+`seo`, `notFound`), `HANDOFF.md`.
  - `og.png` dan ikon dibuat dengan Pillow memakai font situs (Anton, DM Sans), warna dari token DESIGN §2; tampilan OG sudah diperiksa mata di sandbox. Ganti bila ingin desain lain (ukuran tetap 1200×630).
  - **URL situs (D-08):** `lib/site.ts` memakai `NEXT_PUBLIC_SITE_URL`, lalu `VERCEL_PROJECT_PRODUCTION_URL` (otomatis di Vercel), lalu `http://localhost:3000`. **Tidak ada URL karangan.** Sebelum deploy (U18), atur `NEXT_PUBLIC_SITE_URL` bila memakai domain sendiri. Pratinjau OG tidak akan berfungsi di `localhost`.
  - Metadata halaman detail menimpa `openGraph` layout secara utuh (perilaku Next), jadi `ogImages` dipakai ulang di sana.
  - JSON-LD `Person`: nama, S.Kom., peran, url, email, GitHub dan LinkedIn (`sameAs`), Bekasi (alamat kota saja), kampus (`alumniOf`), skill (`knowsAbout`). Tanpa telepon (privasi) dan tanpa data baru. `<` di-escape agar aman.
  - `sitemap.ts` hanya memuat beranda dan tiga halaman unggulan (rute yang ada), tanpa `lastModified` karangan. `robots.ts` mengizinkan semua dan menunjuk sitemap.
  - `not-found.tsx`: "404" merah besar (teks besar), judul, penjelasan, tombol kembali (DESIGN §10); teks dari `content/`. Slug proyek tak dikenal memicu halaman ini (`dynamicParams = false`).
  - Konflik kecil: STRUKTUR §10 menyebut `og.png`; saya menaruhnya di `public/og.png` dan merujuknya lewat `metadata`, bukan konvensi `opengraph-image`, agar berkasnya tetap bisa Anda ganti langsung.
  - Dipenuhi: STRUKTUR §10, BR-01 (teks SEO dari `content/`), BR-02 (tanpa klaim baru).
  - **U15 belum dikerjakan:** isinya pengujian visual di 360/768/1024/1440, reduced motion, dan JS mati, yang butuh browser. Status tetap ⬜. Kirim temuan atau tangkapan layar agar bisa diperbaiki.
  - **Belum dijalankan:** `typecheck`, `lint`, `build` (hanya pemeriksaan sintaks `tsc` tanpa resolusi modul). Hal yang perlu dicek saat `npm run build`: rute `/sitemap.xml` dan `/robots.txt` terbentuk, tag `og:*` dan JSON-LD muncul di sumber halaman, `/proyek/tidak-ada` menampilkan `not-found`, ikon tab tampil.
  - Default D-xx: D-08 dipakai (`*.vercel.app` dulu).
- **Sesi 12 (U14):**
  - File baru: `components/motion/CursorDot.tsx` (client, GSAP).
  - File diedit: `app/layout.tsx` (+`<CursorDot />`), `app/globals.css` (+`cursor: pointer` untuk `button` dan `[role=button]` yang tidak `disabled`, karena Tailwind 4 tidak memberinya lagi), `HANDOFF.md`.
  - **Cursor (D-10):** titik 8 px warna `ink`, `position: fixed`, mengikuti pointer lewat `gsap.quickTo` (`x`, `y`, durasi `fast`, easing `enter`). Kursor asli **tidak disembunyikan** (aksesibilitas, dan D-10 hanya meminta titik kecil). Di atas `a`, `button`, `[role=button]` titik membesar 3× dan menjadi 40% opacity agar teks di bawahnya tetap terbaca; keluar jendela, titik memudar. Hanya `transform` dan `opacity`.
  - **Dimatikan** lewat `gsap.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')`: di layar sentuh, reduced motion, dan tanpa JS titik tetap `opacity-0` dan tidak mengikuti apa pun. `z-[70]` di atas Preloader (60) dan tirai (55).
  - Asumsi: ukuran 8 px, skala 3, opacity 0,4 (STRUKTUR tidak memberi angka; konstanta `grow` dan `dimmed` di atas file). Titik `ink` dipilih agar terlihat di latar gelap dan di atas tombol merah.
  - "Pemolesan interaksi" (rujukan unit) saya batasi pada `cursor: pointer` tombol; tidak ada efek hover baru (DESIGN §9 dan §12 melarang efek hover pada setiap kartu).
  - Dipenuhi: PB-04 (gerak sesuai token), CLAUDE §4.8 (efek pointer hanya `hover: hover` dan `pointer: fine`).
  - **Belum dijalankan:** `typecheck`, `lint`, `build` (hanya pemeriksaan sintaks `tsc` tanpa resolusi modul). **Belum dilihat di browser:** titik mengikuti halus tanpa lag berlebih (durasi 0,3 s), membesar di atas tautan dan tombol (termasuk tombol magnetik Kontak), memudar saat pointer keluar jendela, tidak muncul di sentuh (uji di DevTools mode perangkat) dan reduced motion.
  - Default D-xx: D-10 dipakai.
- **Sesi 11 (U13):**
  - File baru: `components/motion/Preloader.tsx` (client, GSAP), `components/motion/PageTransition.tsx` (client, Motion).
  - File diedit: `app/layout.tsx` (+`<Preloader name>`, `<PageTransition />`, skrip awal diperluas), `app/globals.css` (+aturan `[data-preloader]`), `lib/motion.ts` (+`preloader = 1.2`, `bezier.transition`), `components/motion/HeroMotion.tsx` (timeline menunggu Preloader), `components/ui/Button.tsx` (tautan internal memakai `next/link`), `HANDOFF.md`.
  - **Preloader (D-09):** tirai merah penuh layar dengan nama (Anton). Nama masuk 0,3 s, tertahan 0,3 s, tirai terangkat 0,6 s (`yPercent`): total 1,2 s. Markup dirender di server dan **tersembunyi lewat CSS** kecuali `.js:not(.skip-preloader)`, jadi tidak ada kilatan konten sebelum hidrasi dan tanpa JS tidak muncul. Skrip awal di `<head>` menambah `skip-preloader` bila `sessionStorage.preloaded` ada, reduced motion aktif, atau storage tidak bisa dibaca. Setelah selesai: `display: none`, kelas `skip-preloader` dipasang, `sessionStorage.preloaded = 1`. Cadangan: bila skrip gagal, CSS menyembunyikan tirai sendiri setelah 4 detik (`visibility`), agar situs tidak terkunci.
  - **Hero menunggu Preloader:** `HeroMotion` memberi `delay = preloader (1,2 s)` bila `skip-preloader` belum ada, supaya animasi Hero terlihat setelah tirai terangkat. Perubahan kecil pada file Hero (dua baris).
  - **PageTransition (Motion):** satu `div` tirai merah di bawah layar (`top-full`), digerakkan `animate` lewat `transform` saja. Klik tautan internal ke **rute lain** dicegat di fase capture: tirai menutup (0,3 s), `router.push`, lalu setelah `usePathname` berganti tirai membuka (0,3 s) dan kembali ke posisi awal. Total 0,6 s sesuai DESIGN §5. Tidak dicegat: tautan dengan `target`, `download`, tombol/modifier (Ctrl, Cmd, Shift, Alt, klik tengah), asal lain, dan pathname yang sama (mis. `/#proyek` dari beranda). Reduced motion: pindah langsung. Cadangan: bila rute tidak berganti dalam 2 detik, tirai dibuka sendiri.
  - **Keputusan (konflik halus):** STRUKTUR §7 menyebut Motion `AnimatePresence`. Di App Router, animasi keluar halaman lama memerlukan trik `FrozenRouter` yang memakai internal Next dan rapuh di Next 16, jadi saya memakai tirai tunggal yang digerakkan `animate` dari Motion (pustaka yang sama, perilaku yang sama). Bila ingin `AnimatePresence` murni, minta unit tersendiri.
  - `Button`: href yang diawali `/` dan tanpa `download` kini memakai `next/link` (catatan Sesi 7 terpenuhi; tombol "Kembali" tidak lagi memuat ulang penuh). Hero, Kontak, dan halaman detail otomatis ikut.
  - **Tidak ada animasi masuk khusus untuk konten halaman detail** (STRUKTUR §7 menyebut "konten detail masuk"): tirai membuka sudah menjadi pengungkapnya. Tambahkan hanya bila terasa kurang.
  - Dipenuhi: PB-04 (gerak sesuai token), BR-01, batas pin/scrub tidak berubah.
  - **Belum dijalankan:** `typecheck`, `lint`, `build` (hanya pemeriksaan sintaks `tsc` tanpa resolusi modul; sandbox tanpa `node_modules`/jaringan). **Belum dilihat di browser:** Preloader (urutan, tidak ada kilatan konten, hilang total, tidak muncul lagi setelah muat ulang di tab yang sama, tampil lagi di tab baru), Hero mulai setelah tirai, PageTransition (menutup, berpindah, membuka; tombol Kembali dan "Proyek berikutnya"; Back/Forward browser tidak memakai tirai), `animate` dari `motion/react` yang di-`await`, reduced motion (tanpa preloader dan tanpa tirai), JS mati (tidak ada tirai).
  - Risiko: (1) tipe `Link` dengan `{...props}` bertipe `ComponentProps<'a'>` di `Button` mungkin menghasilkan galat tipe, bila ya kirim pesan galat; (2) klik yang dicegat di fase capture bergantung pada `Link` Next yang membatalkan diri bila `defaultPrevented`; bila navigasi ganda terjadi, kirim tangkapan layar; (3) tirai di atas Navbar (z-55) dan di bawah Preloader (z-60); (4) tombol Back browser pada rute dengan hash tidak diberi tirai.
  - Default D-xx: D-09 dipakai.
- **Sesi 10 (U12):**
  - File baru: `components/sections/Contact.tsx` (server, `id="kontak"`), `components/motion/CopyEmail.tsx` (client).
  - File diedit: `content/profile.ts` (+`contactSection`; `links` +`value` untuk teks tampilan, mis. `github.com/prasetyoaji07`), `lib/motion.ts` (+`magnet = 0.25`), `app/page.tsx` (+`<Contact />`), `HANDOFF.md`.
  - Tata letak (DESIGN §8.6): dua kolom (satu kolom di bawah 900 px). Kiri: judul besar "Mari bekerja sama" (skala hero), kalimat Maganghub Batch 3B, tombol **Salin email** (solid) dan **Unduh CV** (outline), dibungkus `Reveal`. Kanan: daftar bergaris Email, WhatsApp, GitHub, LinkedIn (seluruh baris adalah tautan, tinggi ≥ 44 px; tautan `http` memakai `external`). Tanpa form (D-06).
  - `CopyEmail`: `navigator.clipboard`; label berubah menjadi "Tersalin" (`aria-live="polite"`) selama 2 detik, lalu kembali. Bila clipboard ditolak, label "Gagal menyalin, salin dari daftar" (email tetap terlihat di daftar). Efek magnetik: GSAP `quickTo` pada tombol, dipicu pointer pada pembungkus (bukan pada tombol yang bergerak, agar tidak berputar balik), hanya di `(hover: hover) and (pointer: fine)` dan reduced motion off; direset saat pointer keluar.
  - Asumsi teks (perlu konfirmasi): judul "Mari bekerja sama" dan kalimat "Saya terbuka untuk Maganghub Batch 3B dan posisi Web Developer, IT Support, atau Data..." (peran dari CLAUDE §1); tanpa klaim waktu balasan. Kekuatan magnet 0,25 (DESIGN tidak memberi angka).
  - `Reveal` kini dipakai dua kali (Skills, Kontak): **tidak digabung** dengan `RevealGroup` (perilakunya berbeda: satu elemen vs kelompok berurutan).
  - `public/cv-prasetyo-aji.pdf` belum ada: Unduh CV 404 sampai berkas diberikan (Navbar sama).
  - Dipenuhi: BR-01 (teks dari `content/`), BR-02 (tanpa klaim baru), PB-04 (gerak sesuai token), PB-05 (tanpa backend).
  - **Belum dijalankan:** `typecheck`, `lint`, `build` (hanya pemeriksaan sintaks `tsc` tanpa resolusi modul; sandbox tanpa `node_modules`/jaringan). **Belum dilihat di browser:** magnet halus dan tidak menutupi tombol Unduh CV (area pembungkus memakai `p-3 -m-3`), umpan balik "Tersalin", tata letak di 360/768/1024/1440, tombol Salin email lewat keyboard, `break-all` URL panjang di 360 px, tautan `/#kontak` dari Hero dan Navbar.
  - Default D-xx baru: D-06 dipakai (tanpa form).
- **Sesi 9 (U11):**
  - File baru: `components/sections/Process.tsx` (server, markup), `components/motion/ProcessMotion.tsx` (client, merender `<section id="cara-kerja">`, pola sama dengan Hero).
  - File diedit: `content/profile.ts` (+`processSection.title`), `lib/motion.ts` (+`pinPerStep = 0.6`), `app/page.tsx` (+`<Process />`), `HANDOFF.md`.
  - Markup: `<ol>` lima langkah dari `profile.process` (lingkaran bernomor, judul h3, teks), garis penghubung per langkah (jalur `line`, isi merah). Nomor dipakai karena ini urutan nyata (DESIGN §8.5). Tanpa gerak, semua langkah tampil lengkap: lingkaran merah dan garis terisi (keadaan "selesai").
  - Gerak: **scrub #2 dari 2, jangan ada pin/scrub ketiga.** Section di-pin (`pin`, `scrub`, jarak = 0,6 tinggi viewport × 5 langkah). Awal: langkah 1 aktif, sisanya redup (opacity 0,5, lingkaran kosong). Tiap segmen scroll mengisi garis (`scaleY`, `transform-origin` atas) lalu mengaktifkan langkah berikutnya (`opacity`). Hanya `opacity` dan `transform`; easing `ease.scrub`.
  - Fallback (DESIGN §8.5, STRUKTUR §7): pin hanya aktif bila `prefers-reduced-motion: no-preference` **dan** lebar ≥ 768 px **dan** tinggi ≥ 640 px (tinggi section ±560 px agar tidak terpotong saat pin). Di luar itu, serta tanpa JS, tampil daftar vertikal biasa. Keadaan awal redup hanya dipasang oleh JS (CLAUDE §4.1), dibersihkan `mm.revert()`.
  - Asumsi: jarak scroll 0,6 viewport per langkah dan opacity redup 0,5 (DESIGN §5 tidak memberi angka); ubah `pinPerStep` di `lib/motion.ts` atau `dim` di `ProcessMotion` bila terasa terlalu panjang atau pendek. Tinggi minimum 640 px dipilih agar laptop 768 px tinggi tetap mendapat pin.
  - Dipenuhi: BR-01 (teks dari `content/`), PB-04 (gerak sesuai token), batas pin/scrub maksimal 2.
  - **Belum dijalankan:** `typecheck`, `lint`, `build` (hanya pemeriksaan sintaks `tsc` tanpa resolusi modul; sandbox tanpa `node_modules`/jaringan). **Belum dilihat di browser:** pin berjalan mulus bersama Lenis, tidak ada lompatan saat pin mulai/lepas (`anticipatePin`), tidak ada ruang kosong setelah pin, garis terisi tepat bertemu lingkaran berikutnya, tautan Navbar `/#cara-kerja` mendarat benar pada section yang di-pin, fallback di 360 px dan dengan reduced motion. Hal yang paling perlu dicek mata: urutan aktif tiap langkah dan posisi garis penghubung.
  - Risiko: `pin` pada elemen berpadding dengan Lenis kadang perlu `ScrollTrigger.refresh()` setelah gambar/font termuat; bila posisi pin bergeser, kirim tangkapan layar.
  - Default D-xx baru: tidak ada.
- **Sesi 8 (U10):**
  - File baru: `components/sections/Skills.tsx` (server, `id="skill"`), `components/ui/SectionTitle.tsx` (server).
  - File diedit: `content/profile.ts` (+`skillsSection`: judul dan label section), `components/sections/Projects.tsx` (memakai `SectionTitle`), `app/page.tsx` (+`<Skills />`), `HANDOFF.md`.
  - Tata letak (DESIGN §8.4): judul section, `Marquee` semua skill (dari `skills.flatMap`) di atas, lalu dua kolom (satu kolom di bawah 900 px). Kiri: Pendidikan dan Sertifikat sebagai baris bergaris (nama, lembaga, periode/tahun), dibungkus satu `Reveal` (rencana Sesi 5). Kanan: skill terkelompok (Frontend dan desain, Backend dan data, Dasar IT) sebagai `Chip`. Semua teks dari `content/` (BR-01).
  - **`SectionTitle` diekstrak** karena pola `h2` + garis kini dipakai dua kali (Projects, Skills), sesuai catatan Sesi 6. U11 dan U12 cukup memakainya.
  - `Reveal` kini dipakai sekali (Skills). Catatan penggabungan dengan `RevealGroup` tetap berlaku bila U12 tidak memakainya.
  - Subjudul h3 memakai Anton 18 px kapital (DESIGN §3 menyebut h3 18 px; Anton dipilih agar konsisten dengan judul lain). Label grup skill memakai `mute`, bukan merah, agar kontras aman.
  - Dipenuhi: BR-01, BR-02 (tidak ada angka baru), PB-04 (tanpa gerak baru selain `Reveal` dan `Marquee` yang sudah sesuai token).
  - **Belum dijalankan:** `typecheck`, `lint`, `build` (hanya pemeriksaan sintaks `tsc` tanpa resolusi modul; sandbox tanpa `node_modules`/jaringan). **Belum dilihat di browser:** sambungan putaran Marquee mulus (tanpa lompatan di 40 s), `keyframes` di dalam `@theme` terbaca Tailwind 4.3, `Reveal` kolom kiri muncul sekali, dua kolom di 360/768/1024/1440, Marquee berhenti saat hover dan fokus.
  - Asumsi untuk dikonfirmasi pemilik: daftar pendidikan memuat bootcamp Infinite Learning (2022–2023) sesuai `profile.education` dari Sesi 2, dan sertifikat Infinite Learning 2023 juga tampil di Sertifikat (data lama, tidak diubah).
  - Default D-xx baru: tidak ada.
- **Sesi 7 (U9):**
  - File baru: `app/proyek/[slug]/page.tsx`.
  - File diedit: `content/projects.ts` (`copy` +teks halaman detail), `lib/utils.ts` (+`external` untuk `target`/`rel` tautan luar, dipakai dua kali), `components/ui/ProjectCard.tsx` (memakai `external`), `HANDOFF.md`.
  - Rute statis: `generateStaticParams` hanya untuk proyek unggulan (D-07), `dynamicParams = false`, slug lain 404. Next 16: `params` adalah Promise dan di-`await`. `generateMetadata` memberi judul dan deskripsi per halaman (SEO penuh tetap di U16).
  - Isi: tombol kembali (`/#proyek`), jenis (merah), judul, status; kolom kiri Ringkasan (`description ?? summary`), Alur utama (`highlights`), Catatan; kolom kanan Peran saya, Stack, Tautan (kode, demo bila `demoUrl` ada); di bawah, tautan Proyek berikutnya (siklus antar-unggulan). Satu kolom di bawah 900 px. Statis penuh, tanpa animasi (transisi halaman menyusul di U13).
  - **BR-03:** sampul, Alur utama, dan tautan hanya dirender bila status `repo`/`live`; selain itu halaman hanya memuat deskripsi umum, peran, stack, dan label status. Saat ini ketiga unggulan berstatus `repo`, jadi jalur privat belum terpakai (dijaga untuk perubahan data nanti).
  - **Konflik dokumen (satu kalimat):** DESIGN §8 menamai bagian "Alur utama (daftar langkah)", sedangkan datanya (`highlights`) berisi butir fitur/hasil, bukan langkah berurutan. Saya ikuti nama di dokumen dan merender sebagai daftar bergaris **tanpa nomor** (DESIGN §9: nomor hanya untuk urutan nyata). Bila nama dinilai kurang tepat, ganti satu string `copy.flow`.
  - `Button` untuk "Kembali" memakai `<a>` biasa (muat ulang penuh ke `/#proyek`); **U13 sebaiknya meng-upgrade `Button` agar memakai `next/link` untuk tautan internal** agar transisi halaman jalan.
  - Dipenuhi: BR-01, BR-02, BR-03, PB-04 (tanpa gerak baru).
  - **Belum dijalankan:** `typecheck`, `lint`, `build` (hanya pemeriksaan sintaks `tsc` tanpa resolusi modul; bug `await` di dalam callback sudah ditemukan dan diperbaiki lewat pemeriksaan itu). **Belum dilihat di browser:** tata letak dua kolom di 360/768/1024/1440, tautan Proyek berikutnya, tombol kembali. Hal yang perlu dicek saat `npm run build`: tiga halaman `/proyek/<slug>` ter-prerender sebagai statis (SSG) tanpa peringatan tipe `params`.
  - Default D-xx baru: tidak ada (memakai D-07).
- **Sesi 6 (U8):**
  - File baru: `components/ui/ProjectCard.tsx` (server), `components/sections/Projects.tsx` (server, `id="proyek"`), `components/motion/RevealGroup.tsx` (client).
  - File diedit: `content/projects.ts` (+`copy`, `statusLabel`), `lib/utils.ts` (+`initials`, dipakai Hero dan kartu), `components/sections/Hero.tsx` (memakai `initials`), `app/page.tsx` (+`<Projects />`), `HANDOFF.md`.
  - Tata letak: tiga proyek unggulan (D-07) sebagai kartu ber-sampul 16:10, enam sisanya sebagai kartu ringkas tanpa sampul. Grid 3 kolom → 2 (≤ 900) → 1 (≤ 600). Judul dengan garis memanjang. **Tombol "Lihat semua" tidak dibuat**: tidak ada rute indeks `/proyek` (STRUKTUR §5.2) dan proyek non-unggulan tepat 6, bukan lebih dari 6.
  - Kartu: nama, jenis (merah), ringkasan, chip stack maksimal 5. Unggulan: tautan "Lihat detail" (`/proyek/<slug>`, tautan meregang sehingga seluruh kartu bisa diklik, satu perhentian tab) dan "Lihat kode" bila ada `repoUrl`. Non-unggulan berrepo: hanya "Lihat kode". `private` dan `coming-soon`: label ("Proyek privat", "Segera hadir"), tanpa tautan. Hover (hanya warna garis dan `transform`): sampul membesar halus dan label "Lihat" muncul; fokus keyboard memicu hal yang sama.
  - **BR-03 dijaga di komponen:** sampul hanya dirender bila status `repo`/`live`, jadi proyek privat tidak bisa menampilkan tangkapan layar walau `cover` terisi. Tanpa `cover`, sampul diganti kotak gradasi + inisial berkontur (placeholder jelas, `aria-hidden`).
  - Kontras: label jenis merah dibuat 19 px tebal (kategori teks besar, ±3,7:1). DESIGN §2 menulis "besar atau tebal", tetapi axe/Lighthouse baru menganggap besar bila ≥ 18,66 px tebal, jadi saya memilih ukuran itu.
  - **Konflik dokumen (satu kalimat):** STRUKTUR §7 menyebut Motion untuk kartu masuk, tetapi CLAUDE §4.1 melarang keadaan awal tersembunyi tanpa JS dan §4.2 menyerahkan animasi berbasis scroll ke GSAP; saya memilih sisi CLAUDE (GSAP + `data-reveal`). Motion tetap dipakai untuk Navbar dan nanti transisi halaman (U13). Dampak: `RevealGroup` memakai `ScrollTrigger.batch` (bukan scrub, tidak menambah hitungan pin/scrub).
  - Catatan rapikan nanti: `Reveal` (U7) dan `RevealGroup` hampir sama; setelah U10/U12 jelas pemakaiannya, gabungkan bila `Reveal` hanya dipakai sekali. Pola judul section (`h2` + garis) akan diulang di U10-U12: ekstrak komponen setelah pemakaian kedua.
  - Dipenuhi: BR-01, BR-02, BR-03, PB-04.
  - **Belum dijalankan:** `typecheck`, `lint`, `build` (hanya pemeriksaan sintaks `tsc` tanpa resolusi modul). **Belum dilihat di browser:** masuk berurutan per baris, hover sampul, grid di 360/768/1024/1440, tautan meregang tidak menutupi tautan "Lihat kode" (diberi `z-10`). Tautan "Lihat detail" menuju `/proyek/<slug>` yang baru ada di U9 (404 sampai saat itu).
  - Masih menunggu pemilik (BR-03, sudah tercantum di tabel aset): izin publikasi Berkah Mobilindo dan Kecaknik Food serta peran pribadi; kartu keduanya sudah tampil memakai data dari Sesi 2.
  - Default D-xx baru: tidak ada (memakai D-07).
- **Sesi 5 (U7):**
  - File baru: `components/motion/Reveal.tsx` (client), `components/ui/Marquee.tsx` (server, CSS murni).
  - File diedit: `app/globals.css` (+`--animate-marquee` dan `@keyframes marquee` di `@theme`), `HANDOFF.md`.
  - `Reveal`: pembungkus `div` dengan `data-reveal`; naik `offset` dan memudar masuk satu kali (`ScrollTrigger`, `once`, tanpa scrub, jadi **tidak** menambah hitungan pin/scrub). Memakai token `duration.base`, `ease.enter`, `offset`. Di dalam `gsap.matchMedia` no-preference, sehingga reduced motion dan tanpa JS tampil langsung. Pakai terbatas (DESIGN §9): rencana pemakaian hanya daftar pendidikan (U10) dan bila perlu Kontak (U12); kartu proyek (U8) memakai Motion sesuai STRUKTUR §7.
  - `Marquee({ items, label })`: satu `<ul>` berisi daftar dua kali (putaran mulus, `translateX(-50%)`, hanya `transform`); salinan kedua `aria-hidden`. Berhenti saat hover dan fokus (wadah `tabIndex=0`, `role=region`, `aria-label` dari prop `label`, agar pengguna keyboard punya cara menghentikannya). Reduced motion: animasi mati, salinan kedua disembunyikan, baris jadi bisa digeser. Memakai `Chip`.
  - **Asumsi:** kecepatan Marquee 40 detik per putaran (DESIGN §5 hanya menyebut "lambat", tanpa angka); ubah `--animate-marquee` bila terasa terlalu cepat atau lambat. Marquee tidak punya tombol jeda untuk layar sentuh (tanpa hover); bila dinilai perlu, tambahkan di U15.
  - `Counter` tidak dibuat (sudah inline di Hero, lihat Sesi 4).
  - Dipenuhi: PB-04 (gerak sesuai token), BR-01.
  - **Belum dijalankan:** `typecheck`, `lint`, `build` (hanya pemeriksaan sintaks `tsc` tanpa resolusi modul). Kedua komponen **belum dipakai di halaman mana pun**, jadi belum terlihat di browser; `Marquee` baru tampil di U10, `Reveal` di U10/U12. Dua hal yang perlu dicek saat itu: sambungan putaran Marquee mulus (tanpa lompatan) dan `keyframes` di dalam `@theme` terbaca oleh Tailwind 4.3.
  - Default D-xx baru: tidak ada.
- **Sesi 4 (U6):**
  - File baru: `components/sections/Hero.tsx` (server, hanya markup), `components/motion/HeroMotion.tsx` (client: timeline GSAP, SplitText, counter, parallax). `components/sections/.gitkeep` dihapus.
  - File diedit: `content/profile.ts` (+`hero`: salam, kata raksasa, kalimat nilai, label tombol), `lib/motion.ts` (+`ease.scrub = 'none'`), `app/page.tsx` (placeholder diganti `<Hero />`), `HANDOFF.md`.
  - Urutan gerak (satu timeline): huruf "PORTFOLIO" naik per karakter (1 s), nama per karakter dari 0,3 s, lalu salam, peran, kalimat, tombol, kotak foto + statistik dari 0,6 s; angka menghitung dari 0 ke nilai data. Parallax teks latar: `ScrollTrigger` scrub, maksimal 8% tinggi viewport. Ini scrub #1 dari 2; Cara kerja (U11) adalah #2 dan terakhir.
  - Reduced motion: seluruh blok di dalam `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`, jadi Hero tampil statis (CSS `.js [data-reveal]` sudah dikecualikan). Tanpa JS, angka dan teks tetap terbaca (angka dirender dari data di server).
  - "PORTFOLIO" dipusatkan dengan flex, bukan `translateX(-50%)`, agar tidak bentrok dengan transform GSAP. Topeng gradasi memakai `black` (bukan hex). Inisial placeholder "PA" dihitung dari `profile.name` (D-05); teks "Taruh fotomu di sini" dari prototipe sengaja tidak dibawa ke situs.
  - **Counter:** hanya dipakai di Hero, jadi ditulis langsung di `HeroMotion` (data atribut `data-count`), bukan komponen terpisah (CLAUDE §3: abstraksi setelah dua pemakaian). **U7 tidak perlu membuat `Counter`** kecuali ada pemakaian kedua; cukup `Reveal` dan `Marquee`.
  - Asumsi teks (perlu konfirmasi): `hero.lead` ditulis ulang pendek dari `intro` agar muat ≤ 2 baris sesuai DESIGN §8: "Membangun sistem berbasis data: absensi, maintenance, pemesanan restoran, dan prediksi permintaan." `profile.intro` (lebih panjang, memuat IPK) tidak dipakai di Hero dan tersedia untuk bagian lain. Peran merah di Hero dibuat 20 px tebal agar lolos kontras teks besar (merah di atas `bg` hanya ±3,4:1); **ProjectCard (U8) harus memperhatikan hal yang sama** untuk label jenis proyek 13 px.
  - Tombol "Lihat proyek" dan "Hubungi saya" menuju `/#proyek` dan `/#kontak`; belum ada target sampai U8 dan U12.
  - Dipenuhi: PB-04 (gerak Hero sesuai token), BR-01, BR-02 (angka dari data).
  - **Belum dijalankan:** `typecheck`, `lint`, `build` (sandbox tanpa `node_modules`); hanya pemeriksaan sintaks `tsc` tanpa resolusi modul yang lulus. **Belum dilihat di browser:** urutan animasi, parallax, topeng gradasi, tata letak di 360/768/1024/1440. Hal yang paling perlu dicek mata: (1) "PORTFOLIO" di 360 px terpotong di kiri-kanan karena ukuran minimum 110 px sesuai DESIGN (dekoratif, `aria-hidden`); (2) kelas `bg-linear-160 to-70%` dan `mask-image` tampil benar; (3) SplitText tidak memecah baris nama aneh.
  - Risiko: `SplitText` dan `useGSAP` baru dipakai di sini untuk pertama kali; bila `matchMedia` tidak ikut dibersihkan saat unmount di mode dev (Strict Mode), animasi bisa terlihat ganda. Kirim tangkapan layar atau pesan galat bila terjadi.
  - Default D-xx baru: tidak ada (memakai D-05).
- **Sesi 3 (U5):**
  - File baru: `components/ui/{Button,Chip,Navbar,Footer}.tsx` (`.gitkeep` di `components/ui/` dihapus).
  - File diedit: `content/profile.ts` (+`nav`, `links`, `cvLabel`; `contact` dipisah jadi konstanta, bentuk tidak berubah), `app/globals.css` (+token `--ease-enter` dari DESIGN §5, utilitas `wrap` untuk wadah 1180 px dengan padding 24/18 px, `scroll-padding-top` 7rem HP / 5rem dari 768 px), `app/layout.tsx` (memasang `<Navbar />` dan `<Footer />`), `HANDOFF.md`.
  - `Navbar`: sticky, sembunyi saat scroll turun lewat 80 px dan muncul saat naik (CSS transition, fokus keyboard memunculkannya lagi). Garis kemajuan 2 px memakai Motion `useScroll` (bukan ScrollTrigger, agar tidak dihitung sebagai scrub). Reduced motion ditangani CSS `motion-reduce:` (garis hilang, navbar tidak pernah sembunyi), tanpa `useReducedMotion` agar tidak ada hydration mismatch.
  - Di bawah 768 px Navbar dua baris (nama + Unduh CV, lalu tautan section) tanpa menu hamburger, jadi tetap berfungsi tanpa JS. Titik status "Terbuka untuk Maganghub Batch 3B" tampil dari 1024 px.
  - `Button`: ada `href` → `<a>`, tidak ada → `<button>` (menggantikan `as="a"` di DESIGN §6; hasilnya sama, tipenya lebih sederhana). Tautan eksternal harus memberi `target`/`rel` sendiri; `Footer` sudah melakukannya.
  - "Lewati ke konten" sudah dibuat di U2 (`layout.tsx`), tidak diubah.
  - **ID section yang dijanjikan Navbar** (dipakai U8, U10, U11, U12): `#proyek`, `#skill`, `#cara-kerja`, `#kontak`. Tautan memakai `/#id` agar bekerja dari halaman detail.
  - Dipenuhi: PB-04 (gerak Navbar sesuai token), BR-01 (teks Navbar/Footer dari `content/`).
  - **Belum dijalankan:** `npm run typecheck`, `lint`, `build` (sandbox tanpa `node_modules` dan jaringan), dan semuanya belum dilihat di browser (sembunyi/muncul Navbar, garis kemajuan, dua baris di 360 px, fokus keyboard). Format Prettier juga belum dijalankan, jadi urutan kelas Tailwind mungkin diubah oleh `npm run format`.
  - Risiko: (1) impor `motion/react` dengan paket `motion` ^14.14 belum diuji; jika galat, periksa path impor. (2) Motion menambah ukuran JS awal; ukur di U17. (3) `public/cv-prasetyo-aji.pdf` belum ada, jadi tombol Unduh CV 404 sampai berkas diberikan.
  - Default D-xx baru: tidak ada.
- **Sesi 2 (U3, U4):**
  - File baru: `lib/gsap.ts` (daftar ScrollTrigger, SplitText, `useGSAP` sekali), `lib/motion.ts` (token durasi, easing, stagger, offset, parallax, opsi Lenis; nilai dari DESIGN §5), `components/motion/SmoothScroll.tsx`, `content/projects.ts` (tipe `Project` + 9 proyek), `content/profile.ts`.
  - File diedit: `app/layout.tsx` (memasang `<SmoothScroll />`), `package.json` (+`gsap` 3.15, `@gsap/react`, `lenis`, `motion`), `HANDOFF.md`. `.gitkeep` di `content/` dihapus.
  - `SmoothScroll`: Lenis disinkronkan ke ScrollTrigger lewat `gsap.ticker`, dibungkus `gsap.matchMedia('(prefers-reduced-motion: no-preference)')` sehingga mati otomatis dan bersih saat reduced motion.
  - Data: semua dari CV dan daftar repo. **Statistik Hero dihitung dari data** (BR-02): Proyek (tidak termasuk "segera hadir") = 8, Repositori publik = 6, Sertifikat = 3. Ini berbeda dari prototipe HTML ("7 repositori") karena repo privat tidak dihitung.
  - Dipenuhi: BR-01, BR-02, BR-03 (proyek klien dan privat tanpa tautan kode), PB-04 (fondasi gerak).
  - Dijalankan: `npm install`, `npm run typecheck` lulus, `npm run lint` lulus. Build dengan font dimatikan sementara lulus (rute statis). Layout asli dikembalikan.
  - **Belum dijalankan:** `npm run build` dengan font asli, `npm run dev` di browser, dan gerak Lenis (hanya bisa dinilai di browser; belum dilihat). Tidak ada komponen yang memakai `lib/motion.ts` dan GSAP selain `SmoothScroll`, jadi belum ada animasi yang terlihat.
  - Asumsi yang perlu dikonfirmasi pemilik: kolom `role` proyek (tiga proyek berlabel "Personal Project" di CV ditulis "dikerjakan sendiri", sisanya "Pengembang"); status skripsi Setujuan Coffee ditulis `private` karena tidak ada repo publik di daftar GitHub; ringkasan Kecaknik Food diambil dari dokumen proyeknya.
  - Default D-xx baru: tidak ada.
- **Sesi 1 (U1, U2):**
  - File baru: `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `.prettierrc`, `.gitignore`, `app/{layout.tsx,page.tsx,globals.css,favicon.ico}`, `lib/utils.ts`, folder kosong `components/{sections,ui,motion}`, `content/`, `public/projects/` (berisi `.gitkeep`).
  - U1: Next.js 16.4.6 (App Router, TS), React 19.3, Tailwind 4.3.3 (loader `@tailwindcss/turbopack` bawaan scaffold), ESLint 9, Prettier + plugin Tailwind. Skrip: `dev`, `build`, `start`, `lint`, `typecheck`, `format`. Opsi `cacheComponents` dan `partialPrefetching` bawaan scaffold dihapus (tidak dibutuhkan situs statis). `README.md` dan `AGENTS.md` bawaan scaffold tidak disertakan.
  - U2: `globals.css` berisi token `@theme` persis DESIGN §2 (warna, font, `--container`), dasar (latar, fokus merah, seleksi), dan aturan `.js [data-reveal]` + pengecualian reduced motion. `layout.tsx`: font Anton dan DM Sans via `next/font/google`, `lang="id"`, skrip kecil yang memasang kelas `js` di `<html>`, tautan "Lewati ke konten". `page.tsx` hanya placeholder sampai U6. `lib/utils.ts`: `cn`.
  - Dipenuhi: PB-05, BR-01 (kerangka). Default baru: **D-11** (versi Next.js, lihat STRUKTUR §3).
  - Dijalankan: `npm install` (363 paket), `npm run typecheck` lulus, `npm run lint` lulus 0 error. `npm run build` **gagal di sandbox hanya karena tidak bisa mengambil Google Fonts**; dengan font dimatikan sementara, build lulus (rute `/` dan `/_not-found` statis). Layout asli dikembalikan.
  - **Belum dijalankan:** `npm run build` dengan font asli dan `npm run dev` di browser. Jalankan di komputer Anda (butuh internet saat build pertama).
  - Risiko: versi Next.js ini lebih baru dari 15 (Wonderfool), jadi beberapa API bisa berbeda dari kebiasaan lama. Jika ada galat aneh, kirim pesan lengkapnya.
- **Sesi 0:** lima dokumen disiapkan (`CLAUDE.md`, `STRUKTUR.md`, `DESIGN.md`, `PERINTAH.md`, `HANDOFF.md`). Belum ada kode. Stack dikunci: Next.js (App Router) + TypeScript + Tailwind v4 + GSAP + Lenis + Motion. Prototipe statis `portfolio.html` dan gambar `contoh-portfolio.jpg` (taruh di `referensi/`) menjadi referensi visual. Ditambahkan aturan **Gaya kode: simple, minimalis, padat** di `CLAUDE.md` bagian 3 (permintaan pemilik). Tidak ada default `D-xx` yang dipakai karena belum ada pekerjaan kode (daftar default ada di `STRUKTUR.md` §3).

## Task Board
Legenda: ⬜ belum · 🟡 sebagian · ✅ selesai · 🔥 berat (kuota sesi jadi 1 unit)
Kuota per sesi: **2 unit ringan** atau **1 unit jika ada 🔥**. Kerjakan berurutan.
Rujukan = bagian dokumen yang **boleh dibaca** untuk unit itu (jangan baca seluruh dokumen).

### Tahap A: Fondasi
| Unit | Pekerjaan | Rujukan | Status |
|---|---|---|---|
| U1 | Inisialisasi Next.js (App Router, TS), Tailwind v4, ESLint, Prettier, skrip `typecheck`, `.gitignore`, folder kosong sesuai struktur | CLAUDE §2, STRUKTUR §5.1, PERINTAH (persiapan) | ✅ (typecheck dan lint lulus) |
| U2 | `globals.css` (`@theme` token, kelas `.js`, dasar), `next/font` (Anton, DM Sans), `lib/utils.ts`, kerangka `layout.tsx` | DESIGN §2, 3; STRUKTUR §9 | ✅ (build lulus tanpa font; dengan font belum dijalankan, lihat Changelog) |
| U3 | `lib/gsap.ts` (daftar plugin), `lib/motion.ts` (token), `SmoothScroll` (Lenis + ScrollTrigger, mati saat reduced motion) | STRUKTUR §2.2, §7; DESIGN §5; CLAUDE §4.2 sampai 4.6 | ✅ (typecheck, lint, build tanpa font lulus; gerak belum dilihat di browser) |
| U4 | `content/profile.ts`, `content/projects.ts` + tipe `Project`, isi dari CV dan repo | STRUKTUR §6, §8 | ✅ (lihat asumsi di Changelog Sesi 2) |
| U5 | UI dasar: `Button`, `Chip`, `Navbar` (sembunyi saat scroll turun), `Footer`, tautan "Lewati ke konten" | DESIGN §6, 7, 11; STRUKTUR §7 (Navbar) | ✅ (kode selesai; typecheck, lint, build belum dijalankan; belum dilihat di browser) |

### Tahap B: Section dan animasi
| Unit | Pekerjaan | Rujukan | Status |
|---|---|---|---|
| U6 🔥 | Hero: teks raksasa "PORTFOLIO" terungkap, nama per karakter (SplitText), counter statistik, parallax ringan, placeholder foto | DESIGN §5, 8 (Hero); STRUKTUR §7 (Hero), §8.1 | ✅ (kode selesai; build belum dijalankan; belum dilihat di browser) |
| U7 | `Reveal` dan `Marquee` (`Counter` sudah inline di Hero, buat hanya bila ada pemakaian kedua) | DESIGN §5, 6, 9; STRUKTUR §7 | ✅ (kode selesai; belum dipakai di halaman, belum dilihat di browser) |
| U8 🔥 | Proyek pilihan: `ProjectCard`, grid 3 unggulan + sisanya, hover, tautan ke detail dan GitHub | DESIGN §6, 8 (Proyek); STRUKTUR §7 (Proyek), §8.2 | ✅ (kode selesai; build belum dijalankan; belum dilihat di browser) |
| U9 🔥 | Halaman `/proyek/[slug]` (`generateStaticParams`), isi dari `content`, tombol repo/demo, penanganan status privat | DESIGN §8 (Detail proyek); STRUKTUR §5.2, §6, §8.2; CLAUDE §3.3 | ✅ (kode selesai; build belum dijalankan; belum dilihat di browser) |
| U10 | Skill dan pendidikan: daftar, chip, marquee skill | DESIGN §8 (Skill dan pendidikan); STRUKTUR §7, §8.1 | ✅ (kode selesai; build belum dijalankan; belum dilihat di browser) |
| U11 🔥 | Cara kerja: panel pin/scrub 5 langkah + fallback daftar vertikal (pin #2 terakhir yang diizinkan) | DESIGN §5, 6 (StepPanel), 8 (Cara kerja); STRUKTUR §7 (Cara kerja) | ✅ (kode selesai; build belum dijalankan; belum dilihat di browser) |
| U12 | Kontak: judul besar, tombol email/WhatsApp/LinkedIn/GitHub, salin email dengan umpan balik, efek magnetik (hover:hover saja), Unduh CV | DESIGN §8 (Kontak); STRUKTUR §7 (Kontak), D-06 | ✅ (kode selesai; build belum dijalankan; belum dilihat di browser) |

### Tahap C: Penyelesaian
| Unit | Pekerjaan | Rujukan | Status |
|---|---|---|---|
| U13 | `PageTransition` (Motion, tirai) dan `Preloader` (sekali per sesi, dilewati reduced motion) | DESIGN §5; STRUKTUR §7, D-09 | ✅ (kode selesai; build belum dijalankan; belum dilihat di browser) |
| U14 | Cursor kustom (desktop saja) dan pemolesan interaksi | DESIGN §5, 7; STRUKTUR §7, D-10 | ✅ (kode selesai; build belum dijalankan; belum dilihat di browser) |
| U15 | Responsif 360 sampai 1440 dan uji reduced motion + JS mati | DESIGN §7, 11, 13; CLAUDE §4.1, 4.6, 4.12 | ⬜ |
| U16 | SEO: metadata, `og.png`, `sitemap.ts`, `robots.ts`, JSON-LD Person, `not-found.tsx` | STRUKTUR §10 | ✅ (kode selesai; build belum dijalankan) |
| U17 | Audit performa: Lighthouse mobile, ukuran JS, CLS, kurangi animasi yang melanggar anggaran | STRUKTUR §9; CLAUDE §4.13 | ⬜ |
| U18 | Deploy ke Vercel, cek di HP sungguhan, perbaiki temuan | STRUKTUR §10 | ⬜ |
| U19 | Audit akhir lintas halaman (hex literal, teks di luar `content/`, data karangan, kebocoran proyek privat) | DESIGN §9, 12, 13; CLAUDE §3 (termasuk Gaya kode), §7 | 🟡 (audit statis selesai di Sesi 14; ulangi setelah U15, U17, U18) |

Rencana sesi berikutnya: **U15** (butuh pengujian browser Anda: kirim temuan 360/768/1024/1440, reduced motion, JS mati), **U17** (Lighthouse di komputer Anda), lalu **U18** (deploy). Semua section kini ada, jadi **jalankan `npm install`, `npm run typecheck`, `lint`, `build`, dan `npm run dev` dulu** dan kirim galat atau tangkapan layar bila ada. Sebelum itu, jalankan `npm run typecheck`, `npm run lint`, `npm run build`, dan `npm run dev` di komputer Anda: lihat Hero, Proyek, detail proyek, dan Skill di browser (animasi, Marquee, 360/768/1440 px) dan cek Navbar.

## Status saat ini
- **Stack:** Next.js 16.4.6 (App Router) + TypeScript + Tailwind v4 + GSAP + Lenis + Motion. Final. GSAP, `@gsap/react`, Lenis, Motion terpasang (U3).
- **Sudah ada di folder:** lima dokumen, `referensi/`, kerangka Next.js (U1, U2), fondasi gerak dan smooth scroll (U3), dan data profil serta proyek (U4). Komponen UI dasar (U5) dan Hero (U6), Proyek pilihan (U8), halaman detail proyek (U9), Skill dan pendidikan (U10), Cara kerja (U11), dan Kontak (U12) ada: semua section selesai (belum diverifikasi di browser).
- **Referensi:** `contoh-portfolio.jpg` dan `portfolio.html` (prototipe statis dari percakapan sebelumnya). **Pemilik perlu menaruhnya di `referensi/`** sebelum U1.

## Data dan aset yang menunggu pemilik
| Item | Status |
|---|---|
| Foto profil (rasio 4:5, latar bersih) → `public/` (D-05) | ⏳ |
| `cv-prasetyo-aji.pdf` versi terbaru → `public/` | ⏳ |
| Tangkapan layar atau sampul tiap proyek (16:10, WebP) → `public/projects/<slug>/cover.webp` | ⏳ |
| Tautan demo langsung (jika ada) untuk tiap proyek | ⏳ |
| Peran pribadi tiap proyek (terutama yang dikerjakan bersama) | ⏳ |
| Deskripsi dan izin publikasi Kecaknik Food, Berkah Mobilindo, Wonderfool (BR-03) | ⏳ |
| Konfirmasi tiga proyek unggulan (D-07) | ⏳ |
| Cek `content/projects.ts`: kolom `role`, status Setujuan Coffee, ringkasan Kecaknik Food dan TechNova | ⏳ |
| Nomor WhatsApp dan email final yang ingin ditampilkan | ✅ dari CV: +62 882-9024-8798, prasetyoaji23yo@gmail.com |
| Domain sendiri (D-08), bila diinginkan | ⏳ |

## Aset
| Aset | Status |
|---|---|
| Font Anton dan DM Sans | via `next/font/google` (perlu internet saat build pertama) |
| Ikon | `lucide-react` |
| `og.png` 1200×630 | ✅ `public/og.png` (U16) |
| Favicon | ✅ `app/icon.png`, `app/apple-icon.png` (monogram PA, U16) |

## Keputusan
- (Sesi 0) Stack sama dengan Wonderfool (Next.js, GSAP, Lenis, Motion) agar pengalaman dipakai ulang.
- (Sesi 0) Satu momen unggulan (Hero). Section lain tenang, untuk mencegah kesan template dan menjaga performa.
- (Sesi 0) Statis penuh tanpa backend, karena situs ini hanya menampilkan konten.
- (Sesi 0) Three.js tidak dipakai (D-04). Dapat dipertimbangkan setelah U17 bila anggaran performa masih longgar.

## Catatan / masalah terbuka
- GSAP: pastikan versi terbaru memuat SplitText dan ScrollTrigger dalam paket `gsap` yang sama, dan daftarkan hanya sekali di `lib/gsap.ts`.
- Next.js: U1 memakai versi stabil terbaru (16.4.6), bukan 15 seperti Wonderfool (D-11). Turunkan ke 15 hanya jika ada konflik paket.
- Sandbox biasanya offline: `npm install` dan `npm run build` mungkin tidak bisa dijalankan. Tulis "belum dijalankan", jangan klaim lulus.
- Animasi hanya bisa dinilai di browser. Tiap sesi yang menyentuh animasi wajib mencatat "sudah/belum dilihat di browser".
