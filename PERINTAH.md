# PERINTAH.md: Prompt siap pakai

Pekerjaan dibagi menjadi **unit kecil** di `HANDOFF.md` (Task Board). Satu sesi mengerjakan 2 unit ringan atau 1 unit 🔥. Aturan lengkap di `CLAUDE.md` bagian 5. File ini untuk **Anda**, bukan untuk Claude: tinggal salin dan tempel.

## Cara memakai

**Persiapan (sekali):** folder `portfolio-aji/` berisi 5 dokumen (`CLAUDE.md`, `STRUKTUR.md`, `DESIGN.md`, `PERINTAH.md`, `HANDOFF.md`) dan folder `referensi/` berisi `contoh-portfolio.jpg` dan `portfolio.html`.

**Di Claude Code:** buka terminal di folder `portfolio-aji`, jalankan `claude`, tempel prompt standar.
**Di claude.ai:** chat baru per sesi, unggah `portfolio-aji.zip` (zip lengkap terbaru), tempel prompt standar.

**Setelah tiap sesi:** ekstrak ZIP yang dikembalikan menimpa folder, `npm install` bila ada paket baru, jalankan `npm run dev`, **lihat di browser** (animasi tidak bisa dinilai dari kode), baru lanjut sesi berikutnya.

## 1. Prompt standar (dipakai setiap sesi)

```
Lanjutkan proyek Portfolio Prasetyo Aji.
Baca CLAUDE.md, lalu HANDOFF.md. Kerjakan unit berikutnya yang belum selesai sesuai kuota sesi di CLAUDE.md bagian 5. Baca hanya bagian dokumen yang tercantum di kolom Rujukan. Akhiri sesi sesuai format akhir sesi, lalu berhenti.
```

## 2. Prompt unit tertentu

```
Kerjakan hanya unit <U?> proyek Portfolio Prasetyo Aji. Baca CLAUDE.md dan HANDOFF.md, lalu hanya bagian di kolom Rujukan unit itu. Akhiri sesi sesuai format akhir sesi, lalu berhenti.
```

## 3. Prompt melanjutkan unit 🟡 (sebagian)

```
Lanjutkan unit <U?> yang berstatus 🟡 di proyek Portfolio Prasetyo Aji. Baca CLAUDE.md dan HANDOFF.md (catatan file yang tersisa), lalu hanya bagian di kolom Rujukan. Selesaikan file yang tersisa saja, jangan menulis ulang yang sudah ada. Akhiri sesi sesuai format akhir sesi.
```

## 4. Prompt perbaikan cepat (satu masalah)

```
Perbaiki satu hal di proyek Portfolio Prasetyo Aji: <jelaskan masalah, sebutkan section atau file bila tahu, dan perangkat/browser bila relevan>.
Baca CLAUDE.md. Ubah hanya file yang perlu. Patuhi aturan UI dan animasi di CLAUDE.md bagian 4 dan DESIGN.md bagian 5, 9, 12. Balas maksimal 5 baris: file yang diubah dan alasannya. Catat di Changelog HANDOFF.md.
```

## 5. Prompt animasi terasa berat atau patah-patah

```
Animasi <nama section> terasa berat atau patah-patah di <perangkat/browser>. Baca CLAUDE.md bagian 4 dan STRUKTUR.md bagian 7 dan 9. Cari penyebabnya (properti yang dianimasikan, ScrollTrigger tidak dibersihkan, Lenis dan ScrollTrigger tidak sinkron, gambar terlalu besar). Perbaiki dengan perubahan sekecil mungkin. Jika harus memilih, kurangi animasinya, jangan melanggar anggaran performa. Catat di HANDOFF.md.
```

## 6. Prompt menambah atau mengubah proyek (hanya konten)

```
Tambahkan/ubah proyek di content/projects.ts: <nama, jenis, ringkasan, peran saya, stack, status, tautan repo/demo>.
Baca CLAUDE.md bagian 3 (jangan mengarang data, proyek privat) dan STRUKTUR.md bagian 6 dan 8.2. Jangan mengubah komponen. Jika ada data yang kurang, pakai placeholder yang jelas dan catat di HANDOFF.md.
```

## 7. Prompt audit (setelah U19, opsional)

```
Audit proyek Portfolio Prasetyo Aji tanpa mengubah fitur. Periksa: (1) tidak ada hex, durasi, atau easing literal di komponen; (2) tidak ada teks yang diketik ulang di luar content/; (3) halaman terbaca penuh dengan JS dimatikan dan dengan prefers-reduced-motion; (4) pin/scrub maksimal 2, tidak ada pustaka animasi ganda pada satu elemen; (5) tidak ada scroll horizontal di 360, 768, 1024, 1440; (6) tidak ada data karangan dan proyek privat tidak membocorkan kode atau tangkapan layar; (7) pelanggaran DESIGN.md bagian 9 dan 12; (8) JS awal, LCP, CLS sesuai STRUKTUR.md bagian 9; (9) gaya kode CLAUDE.md bagian 3: kode mati, abstraksi belum dipakai dua kali, fungsi lebih dari 30 baris, komponen lebih dari 120 baris, dependensi di luar daftar, `"use client"` yang tidak perlu. Laporkan dalam tabel (file, masalah, perbaikan), perbaiki yang kecil, dan daftar yang butuh keputusan saya.
```

## 8. Prompt menyederhanakan kode (kapan saja)

```
Sederhanakan <file atau section> di proyek Portfolio Prasetyo Aji tanpa mengubah tampilan atau perilaku. Baca CLAUDE.md bagian 3 (Gaya kode). Hapus kode mati dan abstraksi yang tidak perlu, gabungkan duplikasi, kecilkan cakupan "use client". Balas maksimal 5 baris: apa yang dipangkas dan berapa baris berkurang. Catat di HANDOFF.md.
```

## 9. Daftar periksa Anda sendiri sebelum mengirim tautan ke rekruter

- Buka di HP sungguhan (bukan hanya emulator), jaringan biasa.
- Matikan animasi di pengaturan perangkat, pastikan semua konten tetap terbaca.
- Klik semua tautan: GitHub, LinkedIn, email, WhatsApp, Unduh CV.
- Cek pratinjau tautan (gambar OG) dengan menempelkannya ke WhatsApp atau LinkedIn.
- Pastikan tidak ada tangkapan layar atau nama proyek klien yang belum diizinkan.
