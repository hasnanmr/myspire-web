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

## Opsi 4: Menjalankan di Background (Local Server)

Jika Anda ingin server tetap berjalan meskipun terminal ditutup (deployment di server lokal/VPS), gunakan **PM2**.

1.  **Install PM2 (Process Manager):**
    ```bash
    npm install -g pm2
    # Jika gagal karena permission, gunakan: sudo npm install -g pm2
    ```

2.  **Jalankan Server:**
    Pastikan Anda sudah melakukan build (`npm run build`) terlebih dahulu.
    ```bash
    pm2 start npm --name "myspire-web" -- start
    ```

3.  **Perintah Berguna Lainnya:**
    *   **Cek Status:** `pm2 list`
    *   **Lihat Logs:** `pm2 logs`
    *   **Stop Server:** `pm2 stop myspire-web`
    *   **Restart Server:** `pm2 restart myspire-web`

---

## Opsi 5: Cloudflare Tunnel (Currently Active - Public Access Gratis)

**Status:** ✅ **Saat ini sedang berjalan**

Cloudflare Tunnel memungkinkan Anda mengekspos server lokal ke internet tanpa memerlukan domain atau konfigurasi router. Cocok untuk mockup temporary dengan URL publik yang stabil.

### Setup Saat Ini:

**URL Publik (Aktif):** `https://wheel-sellers-gasoline-clusters.trycloudflare.com`

Server development dan tunnel saat ini berjalan di background sebagai proses persistent.

### Cara Menjalankan (Manual):

1.  **Jalankan Next.js Server di Background:**
    ```bash
    nohup npm run dev > next_dev.log 2>&1 &
    ```

2.  **Jalankan Cloudflare Tunnel di Background:**
    ```bash
    nohup npx cloudflared tunnel --url http://localhost:3000 > cloudflare_tunnel.log 2>&1 &
    ```

3.  **Dapatkan URL Publik:**
    Buka file log untuk melihat URL yang digenerate:
    ```bash
    grep -o "https://.*\.trycloudflare\.com" cloudflare_tunnel.log
    ```

### Manajemen Proses Background:

**Cek Status Proses:**
```bash
ps aux | grep -E "(next|cloudflared)" | grep -v grep
```

**Lihat Log Server:**
```bash
tail -f next_dev.log
```

**Lihat Log Tunnel:**
```bash
tail -f cloudflare_tunnel.log
```

**Stop Semua Proses:**
```bash
# Stop Next.js server
fuser -k 3000/tcp

# Stop Cloudflare Tunnel
pkill cloudflared
```

**Restart Tunnel (jika URL berubah):**
```bash
pkill cloudflared
nohup npx cloudflared tunnel --url http://localhost:3000 > cloudflare_tunnel.log 2>&1 &
# Tunggu beberapa detik, lalu cek log untuk URL baru
tail -n 20 cloudflare_tunnel.log
```

### Kelebihan:
- ✅ Tidak perlu akun atau konfigurasi
- ✅ HTTPS otomatis
- ✅ Gratis untuk penggunaan temporary
- ✅ Berjalan di background dengan `nohup`

### Kekurangan:
- ⚠️ URL random (tidak bisa custom tanpa akun Cloudflare)
- ⚠️ Tidak ada uptime guarantee untuk tunnel tanpa akun
- ⚠️ URL akan berubah jika tunnel direstart

---


> [!TIP]
> **Vercel** adalah pilihan terbaik karena setiap kali Anda melakukan `git push`, website akan otomatis terupdate. Klien akan selalu melihat versi terbaru tanpa perlu campur tangan manual.
