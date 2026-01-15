# Panduan Deployment Myspire

Dokumen ini menjelaskan langkah-langkah untuk melakukan deployment website Myspire agar dapat diakses oleh klien sebagai mockup.

## Persiapan Awal

Pastikan semua perubahan terbaru telah disimpan dan di-commit ke Git lokal:

```bash
git add .
git commit -m "Siap untuk deployment"
```

## Opsi 1: Deployment via Vercel (Paling Mudah & Gratis)

Vercel adalah cara tercepat untuk menayangkan project Next.js ke internet.

### Langkah-langkah:
1.  **Hubungkan ke GitHub:**
    *   Buat repository baru di GitHub (misal: `myspire-web`).
    *   Ikuti instruksi di GitHub untuk menghubungkan project lokal Anda ke repository tersebut:
        ```bash
        git remote add origin https://github.com/[username-anda]/myspire-web.git
        git branch -M main
        git push -u origin main
        ```
2.  **Impor ke Vercel:**
    *   Masuk ke [vercel.com](https://vercel.com) menggunakan akun GitHub Anda.
    *   Klik button **"Add New"** -> **"Project"**.
    *   Pilih repository `myspire-web` yang baru saja Anda buat.
    *   Klik **"Deploy"**.
3.  **Bagikan URL:**
    *   Vercel akan memberikan URL publik (misal: `myspire-web.vercel.app`) yang bisa langsung dikirimkan ke klien.

---

## Opsi 2: Build untuk Hosting Sendiri

Jika Anda ingin menjalankan versi optimasi secara lokal atau di server sendiri:

1.  **Jalankan Build Production:**
    ```bash
    npm run build
    ```
2.  **Jalankan Server Production:**
    ```bash
    npm run start
    ```
    Website akan berjalan di port 3000 dengan performa yang jauh lebih cepat daripada mode development.

---

## Opsi 3: Preview via Local Network (Mockup Cepat)

Jika klien sedang bersama Anda dalam satu jaringan Wi-Fi yang sama:

1.  Cari IP Address komputer Anda (buka CMD lalu ketik `ipconfig`). Cari bagian `IPv4 Address` (misal: `192.168.1.15`).
2.  Jalankan server dengan akses publik:
    ```bash
    npm run dev -- -H 0.0.0.0
    ```
3.  Minta klien membuka browser dan mengetik: `http://192.168.1.15:3000`.

---

> [!TIP]
> **Vercel** adalah pilihan terbaik karena setiap kali Anda melakukan `git push`, website akan otomatis terupdate. Klien akan selalu melihat versi terbaru tanpa perlu campur tangan manual.
