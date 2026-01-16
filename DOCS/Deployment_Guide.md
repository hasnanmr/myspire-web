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

## Opsi 5: Cloudflare Tunnel (Public Access Gratis - Persistent)

**Status:** ✅ **Solusi untuk tetap berjalan setelah SSH disconnect**

Cloudflare Tunnel memungkinkan Anda mengekspos server lokal ke internet tanpa memerlukan domain atau konfigurasi router. Cocok untuk mockup temporary dengan URL publik yang stabil.

### Setup Saat Ini:

**URL Publik (Aktif):** `https://infant-browse-silicon-photographers.trycloudflare.com`

> [!NOTE]
> **Status:** ✅ Running with PM2 - Will stay alive after SSH disconnect

> [!WARNING]
> **Masalah:** Tunnel dan server akan mati saat Anda menutup koneksi SSH karena proses masih terikat ke session terminal.
> 
> **Solusi:** Gunakan salah satu metode di bawah ini untuk menjalankan proses secara persistent.

---

### Metode 1: PM2 (Paling Mudah & Direkomendasikan)

PM2 dapat mengelola baik Next.js server maupun Cloudflare tunnel, dan proses akan tetap berjalan setelah SSH disconnect.

1.  **Install PM2 (jika belum):**
    ```bash
    npm install -g pm2
    # Jika gagal karena permission: sudo npm install -g pm2
    ```

2.  **Jalankan Next.js dengan PM2:**
    ```bash
    cd /home/ramadhan/web_myspire/myspire-web
    pm2 start npm --name "myspire-dev" -- run dev
    ```

3.  **Jalankan Cloudflare Tunnel dengan PM2:**
    ```bash
    pm2 start npx --name "cloudflare-tunnel" -- cloudflared tunnel --url http://localhost:3000
    ```

4.  **Dapatkan URL Publik:**
    ```bash
    pm2 logs cloudflare-tunnel --lines 50 | grep -o "https://.*\.trycloudflare\.com"
    ```

5.  **Save dan Setup Auto-Start (opsional):**
    ```bash
    pm2 save
    pm2 startup
    # Jalankan command yang diberikan oleh pm2 startup
    ```

**Perintah PM2 Berguna:**
```bash
# Lihat status semua proses
pm2 list

# Lihat logs real-time
pm2 logs

# Lihat logs tunnel saja
pm2 logs cloudflare-tunnel

# Restart tunnel (URL akan berubah)
pm2 restart cloudflare-tunnel

# Stop semua
pm2 stop all

# Delete semua process
pm2 delete all
```

---

### Metode 2: Screen / Tmux (Alternatif Mudah)

Gunakan `screen` atau `tmux` untuk membuat session yang tidak akan tertutup saat SSH disconnect.

**Menggunakan Screen:**

1.  **Install screen (jika belum ada):**
    ```bash
    sudo apt install screen
    ```

2.  **Buat session baru:**
    ```bash
    screen -S myspire
    ```

3.  **Di dalam screen, jalankan Next.js:**
    ```bash
    cd /home/ramadhan/web_myspire/myspire-web
    npm run dev
    ```

4.  **Buka terminal/panel baru (Ctrl+A lalu C), jalankan tunnel:**
    ```bash
    npx cloudflared tunnel --url http://localhost:3000
    ```

5.  **Detach dari screen (Ctrl+A lalu D)** - Session tetap berjalan di background

6.  **Reattach nanti:**
    ```bash
    screen -r myspire
    ```

**Menggunakan Tmux:**

1.  **Install tmux (jika belum ada):**
    ```bash
    sudo apt install tmux
    ```

2.  **Buat session baru:**
    ```bash
    tmux new -s myspire
    ```

3.  **Jalankan Next.js di window pertama:**
    ```bash
    cd /home/ramadhan/web_myspire/myspire-web
    npm run dev
    ```

4.  **Buat window baru (Ctrl+B lalu C), jalankan tunnel:**
    ```bash
    npx cloudflared tunnel --url http://localhost:3000
    ```

5.  **Detach dari tmux (Ctrl+B lalu D)**

6.  **Reattach nanti:**
    ```bash
    tmux attach -t myspire
    ```

---

### Metode 3: Systemd Service (Paling Robust untuk Production)

Untuk setup yang paling stabil dan otomatis restart, buat systemd service.

1.  **Buat service untuk Next.js:**
    ```bash
    sudo nano /etc/systemd/system/myspire-web.service
    ```
    
    Isi dengan:
    ```ini
    [Unit]
    Description=Myspire Next.js Development Server
    After=network.target

    [Service]
    Type=simple
    User=ramadhan
    WorkingDirectory=/home/ramadhan/web_myspire/myspire-web
    ExecStart=/usr/bin/npm run dev
    Restart=always

    [Install]
    WantedBy=multi-user.target
    ```

2.  **Buat service untuk Cloudflare Tunnel:**
    ```bash
    sudo nano /etc/systemd/system/cloudflare-tunnel.service
    ```
    
    Isi dengan:
    ```ini
    [Unit]
    Description=Cloudflare Tunnel for Myspire
    After=network.target myspire-web.service

    [Service]
    Type=simple
    User=ramadhan
    WorkingDirectory=/home/ramadhan/web_myspire/myspire-web
    ExecStart=/usr/bin/npx cloudflared tunnel --url http://localhost:3000
    Restart=always

    [Install]
    WantedBy=multi-user.target
    ```

3.  **Enable dan start services:**
    ```bash
    sudo systemctl daemon-reload
    sudo systemctl enable myspire-web
    sudo systemctl enable cloudflare-tunnel
    sudo systemctl start myspire-web
    sudo systemctl start cloudflare-tunnel
    ```

4.  **Cek status dan logs:**
    ```bash
    # Cek status
    sudo systemctl status myspire-web
    sudo systemctl status cloudflare-tunnel
    
    # Lihat logs
    sudo journalctl -u cloudflare-tunnel -f
    
    # Dapatkan URL tunnel
    sudo journalctl -u cloudflare-tunnel --no-pager | grep -o "https://.*\.trycloudflare\.com" | tail -1
    ```

---

### Cara Menjalankan (Nohup - Tidak Direkomendasikan)

> [!CAUTION]
> Metode `nohup` di bawah **TIDAK RELIABLE** untuk remote server karena proses bisa tetap terminate saat SSH disconnect. Gunakan PM2, Screen/Tmux, atau Systemd sebagai gantinya.

1.  **Jalankan Next.js Server di Background:**
    ```bash
    nohup npm run dev > next_dev.log 2>&1 &
    disown
    ```

2.  **Jalankan Cloudflare Tunnel di Background:**
    ```bash
    nohup npx cloudflared tunnel --url http://localhost:3000 > cloudflare_tunnel.log 2>&1 &
    disown
    ```

3.  **Dapatkan URL Publik:**
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
disown
# Tunggu beberapa detik, lalu cek log untuk URL baru
tail -n 20 cloudflare_tunnel.log
```

---

### Kelebihan:
- ✅ Tidak perlu akun atau konfigurasi
- ✅ HTTPS otomatis
- ✅ Gratis untuk penggunaan temporary
- ✅ Bisa berjalan persistent dengan PM2/Screen/Systemd

### Kekurangan:
- ⚠️ URL random (tidak bisa custom tanpa akun Cloudflare)
- ⚠️ Tidak ada uptime guarantee untuk tunnel tanpa akun
- ⚠️ URL akan berubah jika tunnel direstart

---

## Testing Mobile Compatibility (Android & iOS)

> [!IMPORTANT]
> Website Myspire dibangun dengan Next.js dan sudah **otomatis responsive** dan kompatibel dengan browser mobile Android dan iOS. Tidak ada konfigurasi khusus yang diperlukan.

### Cara Testing di Mobile Browser:

**Saat menggunakan Cloudflare Tunnel atau Vercel:**

1. **Dapatkan URL Publik:**
   - Cloudflare: `https://[random-name].trycloudflare.com`
   - Vercel: `https://[project-name].vercel.app`

2. **Buka di Mobile Browser:**
   - **Android:** Buka Chrome, Firefox, atau browser default
   - **iOS:** Buka Safari, Chrome, atau browser lainnya
   - Ketik atau paste URL langsung di address bar

3. **Test User Experience:**
   - ✅ Touch gestures (tap, swipe)
   - ✅ Responsive layout (otomatis adjust ke ukuran layar)
   - ✅ Image loading
   - ✅ Navigation menu
   - ✅ Form interactions (jika ada)

### Browser Mobile yang Didukung:

| Platform | Browser | Status |
|----------|---------|--------|
| Android | Chrome | ✅ Fully Supported |
| Android | Firefox | ✅ Fully Supported |
| Android | Samsung Internet | ✅ Fully Supported |
| iOS | Safari | ✅ Fully Supported |
| iOS | Chrome | ✅ Fully Supported |
| iOS | Firefox | ✅ Fully Supported |

### Tips untuk Demo ke Klien via Mobile:

1. **Share URL via WhatsApp/Email:**
   ```
   Halo! Silakan cek mockup website Myspire di:
   https://[your-url-here]
   
   Bisa dibuka di HP langsung (Android/iOS) ✓
   ```

2. **Generate QR Code (opsional):**
   - Kunjungi [qr-code-generator.com](https://www.qr-code-generator.com/)
   - Paste URL Cloudflare/Vercel Anda
   - Download QR code
   - Klien tinggal scan dengan kamera HP

3. **Test Responsive Design:**
   - Website sudah otomatis menyesuaikan layout untuk mobile
   - Semua fitur tetap berfungsi di layar kecil
   - Tidak perlu aplikasi khusus, cukup browser

> [!TIP]
> Untuk testing cepat responsiveness di desktop, gunakan Chrome DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M) dan pilih preset mobile seperti iPhone atau Galaxy.

---


> [!TIP]
> **Vercel** adalah pilihan terbaik karena setiap kali Anda melakukan `git push`, website akan otomatis terupdate. Klien akan selalu melihat versi terbaru tanpa perlu campur tangan manual.
