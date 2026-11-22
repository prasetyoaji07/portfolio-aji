# DESIGN.md: Sistem desain Portfolio Prasetyo Aji

> Sumber kebenaran untuk **tampilan dan gerak**. Jika bentrok dengan `STRUKTUR.md`, `DESIGN.md` menang untuk tampilan, `STRUKTUR.md` menang untuk konten, stack, dan rute.

## 1. Arah desain

- **Referensi:** `referensi/contoh-portfolio.jpg` (arah gaya yang disetujui pemilik) dan `referensi/portfolio.html` (prototipe isi nyata).
- **Karakter:** gelap, merah, tipografi besar dan padat, garis tipis, sudut tegas. Terasa seperti poster editorial, bukan dashboard.
- **Satu momen unggulan:** Hero. Teks raksasa "PORTFOLIO" berwarna merah di belakang nama. Semua section lain dibuat tenang agar momen itu berarti.
- **Pekerjaan desain:** membuat rekruter paham siapa Anda dan apa yang sudah Anda bangun dalam 10 detik, lalu memberi alasan untuk membuka satu proyek.
- Gelap-merah adalah arah yang **ditetapkan pemilik**, jadi dipakai apa adanya. Pembeda dari template datang dari isi yang spesifik (sistem nyata, data nyata), perlakuan tipografi di Hero, dan disiplin gerak (§5), bukan dari dekorasi.

## 2. Token (`app/globals.css`, blok `@theme`)

| Token | Nilai | Pakai |
|---|---|---|
| `--color-bg` | `#0c0708` | Latar halaman |
| `--color-panel` | `#140d0e` | Kartu, panel |
| `--color-red` | `#d4151c` | Aksen utama, tombol utama, angka, garis aktif |
| `--color-red-deep` | `#7d0b10` | Gradasi, hover tombol, garis penghubung |
| `--color-ink` | `#f3ede9` | Teks utama |
| `--color-mute` | `#a1938f` | Teks sekunder |
| `--color-line` | `#2b1c1d` | Garis dan batas |
| `--font-display` | Anton, Impact, "Arial Narrow", sans-serif | Judul raksasa |
| `--font-body` | "DM Sans", "Helvetica Neue", Arial, sans-serif | Isi dan UI |
| `--container` | `1180px` | Lebar maksimum konten |

Aturan: merah dipakai **hemat** (aksen, bukan latar luas) kecuali Hero dan transisi halaman. Kontras `ink` di atas `bg` dan `mute` di atas `bg` harus ≥ 4,5:1. Teks merah di atas `bg` hanya untuk teks besar atau tebal.

## 3. Tipografi

- Dua keluarga saja: **Anton** (judul) dan **DM Sans** (isi). Tidak menambah font lain.
- Judul Anton selalu huruf kapital, `line-height` rapat (0,9 sampai 1).
- Skala: hero `clamp(60px, 9vw, 118px)`, teks latar Hero `clamp(110px, 24vw, 330px)`, h2 `clamp(30px, 4vw, 44px)`, h3 18 px, isi 16 px (`line-height` 1,6), teks kecil 13 sampai 14 px.
- Panjang baris isi ≤ 70 karakter. Isi rata kiri, tidak rata tengah.
- Salam di Hero ("Halo, saya") memakai serif miring sebagai kontras, satu-satunya tempat serif dipakai.
- Tanda baca tipografis: apostrof ’ dan kutip “ ” pada teks yang dibaca orang.

## 4. Bentuk, garis, bayangan

- **Sudut tegas** (radius 0) untuk kartu, tombol, chip. Lingkaran hanya untuk penanda langkah Cara kerja dan titik kecil status.
- Struktur dibentuk oleh **garis 1 px** `--color-line`, bukan bayangan. Tidak ada bayangan jatuh. Satu-satunya cahaya: titik status merah di Navbar.
- Tidak ada glassmorphism, tidak ada gradasi dekoratif. Gradasi hanya untuk topeng teks Hero dan latar kotak foto.
- Jarak: kelipatan 4 px. Jarak antar-section 72 sampai 96 px di desktop, 56 px di HP.

## 5. Gerak

Gerak hanya muncul untuk (a) menarik perhatian pada satu hal, atau (b) menjawab aksi pengguna.

| Token | Nilai |
|---|---|
| Durasi `cepat` / `sedang` / `lambat` | 0,3 s / 0,6 s / 1,0 s |
| Easing masuk | GSAP `power3.out`, CSS `cubic-bezier(.2,.7,.2,1)` |
| Easing transisi | GSAP `power2.inOut` |
| Stagger teks per karakter | 0,03 sampai 0,04 s |
| Jarak masuk (translateY) | maksimal 24 px |
| Parallax teks latar Hero | maksimal ±8% tinggi viewport |
| Lenis | `duration 1,2`, `smoothWheel: true` |
| Hover | 0,3 s, hanya warna, `transform`, atau `opacity` |
| Preloader | ≤ 1,2 s, sekali per sesi |
| Tirai transisi halaman | 0,6 s total (tutup 0,3 + buka 0,3) |

Aturan: nilai hanya dari tabel ini (disimpan di `lib/motion.ts`). Pin/scrub maksimal 2. Tidak ada gerak berulang tanpa henti selain Marquee skill, yang berhenti saat hover/fokus dan saat reduced motion. Kilatan dilarang.

## 6. Katalog komponen

Semua elemen interaktif berasal dari komponen ini (`components/ui`), bukan `<button>` atau `<a>` bergaya sendiri di section.

| Komponen | Isi dan perilaku |
|---|---|
| `Button` | Variasi `solid` (latar merah), `outline` (garis merah), `text`. Tinggi minimal 44 px, fokus terlihat, bisa `as="a"`. Hover: latar `red-deep` |
| `Chip` | Label teknologi, garis `line`, teks `mute`, tanpa interaksi |
| `Navbar` | Nama di kiri, tautan section, Unduh CV, titik status "Terbuka untuk Maganghub". Menyembunyikan diri saat scroll turun. Garis kemajuan scroll 2 px |
| `Footer` | Hak cipta dan tautan kontak singkat |
| `ProjectCard` | Sampul 16:10, nama, jenis (merah), ringkasan 1 sampai 2 kalimat, chip stack maksimal 5, tautan. Status `private` dan `coming-soon` tampil sebagai label, tanpa tautan kode |
| `Marquee` | Baris skill bergulir lambat, berhenti saat hover/fokus |
| `SplitHeading` | Memecah teks menjadi karakter atau kata untuk animasi (SplitText), menjaga teks asli untuk pembaca layar |
| `Reveal` | Pembungkus masuk satu kali (dipakai terbatas, lihat §9) |
| `Counter` | Angka naik dari 0. **Hanya** untuk angka yang bisa diverifikasi dari `content/` |
| `StepPanel` | Panel Cara kerja: penanda langkah lingkaran, garis penghubung terisi sesuai scroll |
| `Preloader`, `PageTransition`, `SmoothScroll` | Sesuai STRUKTUR §7 |

## 7. Tata letak dan responsif

- Wadah `max-width: var(--container)`, padding samping 24 px (18 px di bawah 600 px).
- Breakpoint: 600, 900 (kolom Hero dan Kontak menjadi satu), 1024. Grid proyek 3 kolom → 2 kolom (≤ 900) → 1 kolom (≤ 600).
- Tanpa scroll horizontal di lebar 360 sampai 1440. Konten lebar (kode, tabel) bergulir di dalam wadahnya sendiri.
- Target sentuh ≥ 44 px. Efek pointer (magnetik, cursor) hanya pada `hover: hover` dan `pointer: fine`.
- Lengket di HP: Navbar tidak boleh menutupi isi (beri `scroll-padding-top`).

## 8. Spesifikasi section

1. **Hero:** nama besar bertumpuk (Prasetyo / Aji), salam serif miring, peran dalam merah, satu kalimat nilai (≤ 2 baris), dua tombol (Lihat proyek, Hubungi saya). Kanan: kotak foto 4:5 (placeholder inisial "PA" sampai D-05 terisi) dan tiga angka dari data (`Counter`). Teks "PORTFOLIO" di belakang dengan topeng gradasi ke bawah.
2. **Proyek pilihan:** judul dengan garis memanjang. Tiga proyek unggulan sebagai `ProjectCard` lebih besar, sisanya grid lebih kecil. Tombol "Lihat semua" bila lebih dari 6.
3. **Detail proyek (`/proyek/[slug]`):** judul, jenis, peran Anda, stack, status. Bagian: Ringkasan, Peran saya, Alur utama (daftar langkah), Catatan (mis. "Data uji simulasi"), Tautan (kode, demo bila ada). Proyek privat hanya deskripsi umum (CLAUDE §3.3). Tombol kembali dan proyek berikutnya.
4. **Skill dan pendidikan:** dua kolom. Kiri pendidikan dan sertifikat sebagai baris bergaris. Kanan skill terkelompok (Frontend dan desain, Backend dan data, Dasar IT). Marquee skill di atasnya.
5. **Cara kerja:** lima langkah berurutan (Pahami kebutuhan, Rancang alur dan database, Bangun API, Bangun antarmuka, Uji dan rilis). Ini benar-benar urutan, jadi penomoran dipakai. Fallback: daftar vertikal.
6. **Kontak:** judul besar, kalimat singkat tentang Maganghub Batch 3B, daftar kontak bergaris (Email, WhatsApp, GitHub, LinkedIn), tombol Unduh CV dan Salin email.

## 9. Agar tidak terasa kaku dan buatan template

- Hanya **Hero** yang dramatis. Dilarang pola "fade-up pada setiap section" dan hover mengangkat pada setiap kartu. Pilih beberapa tempat yang bergerak dengan alasan.
- Penomoran hanya untuk urutan nyata (Cara kerja). Tidak ada nomor dekoratif "01 / 02 / 03" pada proyek atau kategori.
- Tidak ada label kecil huruf kapital berjarak di atas setiap judul. Tidak ada baris meta bertitik tengah ("A · B · C") sebagai pengganti kalimat.
- Isi harus **spesifik**: sebut apa yang dibangun (QR dinamis, geofencing, alur tiket multitahap), bukan klaim umum. Jika sebuah blok bisa ditempel di portofolio siapa pun tanpa diubah, tulis ulang.
- Setiap section punya bentuk berbeda (Hero poster, proyek kartu, pendidikan baris bergaris, Cara kerja panel pin, Kontak daftar besar), bukan satu pola yang diulang.

## 10. Tulisan (suara Prasetyo)

- Bahasa Indonesia, kalimat aktif, kata kerja jelas, huruf kapital hanya di awal kalimat dan nama.
- Tulis **apa yang Anda kerjakan sendiri**. Proyek tim: sebut peran.
- Tombol menyebut hasilnya: "Lihat proyek", "Hubungi saya", "Unduh CV", "Salin email". Setelah disalin: "Tersalin".
- Tidak ada kata promosi ("inovatif", "kelas dunia", "solusi terbaik"). Tidak ada angka atau klaim yang tidak bisa dibuktikan (BR-02).
- Galat dan keadaan kosong menjelaskan apa yang terjadi dan langkah berikutnya, tanpa meminta maaf berlebihan.

## 11. Aksesibilitas dan kualitas

- Semantik HTML (`header`, `nav`, `main`, `section`, `footer`, satu `h1` per halaman). Tautan "Lewati ke konten".
- Fokus terlihat (garis merah 2 px dengan jarak), urutan tab logis, semua fungsi bisa lewat keyboard.
- `aria-label` pada tombol ikon. Teks yang dipecah per karakter tetap memiliki teks utuh untuk pembaca layar.
- Reduced motion: lihat STRUKTUR §7 kolom fallback. Konten tidak pernah bergantung pada animasi.
- Gambar: `alt` bermakna, `next/image`, WebP/AVIF. Foto tanpa wajah jelas tetap diberi `alt`.

## 12. Daftar larangan

- Gambar stok, foto wajah dari internet, avatar AI.
- Lorem ipsum, testimoni karangan, logo klien tanpa izin, angka pengguna atau performa karangan.
- Glassmorphism, bayangan jatuh, gradasi dekoratif, emoji sebagai ikon, ikon hiasan tanpa fungsi.
- Autoplay suara atau video. Kursor kustom di layar sentuh. Scroll-jacking yang menghalangi membaca.
- Mengubah warna, font, atau durasi di luar token §2 dan §5.
- Menambah pin/scrub ketiga.

## 13. Checklist QA visual (per section)

- [ ] Terbaca penuh dengan JS dimatikan dan dengan reduced motion.
- [ ] Tidak ada hex, durasi, atau easing literal di komponen.
- [ ] Judul tidak terpotong di 360 px. Tidak ada scroll horizontal di 360, 768, 1024, 1440.
- [ ] Kontras teks ≥ 4,5:1. Fokus keyboard terlihat.
- [ ] Gerak tidak menyentak di HP kelas menengah (panel Performance, tanpa layout thrashing).
- [ ] Tidak ada pola yang melanggar §9 dan §12.
- [ ] Hero tetap menjadi satu-satunya momen yang paling mencolok.
