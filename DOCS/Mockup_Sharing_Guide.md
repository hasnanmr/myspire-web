# Mockup Sharing Guide (Free & Temporary)

If you need a temporary public URL to show the mockup to a client without buying a domain, use one of these free services.

## Opsi 1: Localtunnel (Paling Cepat)
Sangat mudah digunakan dan tidak memerlukan akun. URL akan aktif selama terminal tetap terbuka.

1.  **Jalankan Command Ini:**
    ```bash
    npx localtunnel --port 3000
    ```
2.  **Dapatkan URL:** Terminal akan menampilkan URL seperti `https://fresh-apples-fall.loca.lt`.
3.  **Password:** Saat pertama kali dibuka, Localtunnel akan meminta "Endpoint IP". Masukkan IP publik Anda (cek di [whatsmyip.org](https://www.whatsmyip.org/)).

## Opsi 2: Tailscale Funnel (Jika Menggunakan Tailscale)
Karena Anda menggunakan IP `100.x.x.x`, Anda kemungkinan besar sudah menggunakan Tailscale. Tailscale memiliki fitur **Funnel** untuk mengekspos server lokal ke internet secara gratis dengan HTTPS.

1.  **Aktifkan Funnel:**
    ```bash
    tailscale funnel 3000
    ```
2.  **Lihat URL:** Tailscale akan memberikan URL permanen berbasis nama mesin Anda (misal: `https://myspire-web.tail1234.ts.net`).

## Opsi 3: Cloudflare Tunnel (Sangat Stabil & Persistent)
Sangat stabil dan memberikan URL `trycloudflare.com` secara otomatis.

> [!WARNING]
> **PENTING untuk Remote Server:** Jika menjalankan di remote server via SSH, proses tunnel akan mati saat SSH disconnect. Gunakan **PM2**, **Screen/Tmux**, atau **Systemd Service** untuk menjalankan secara persistent. Lihat [Deployment_Guide.md](./Deployment_Guide.md#opsi-5-cloudflare-tunnel-public-access-gratis---persistent) untuk instruksi lengkap.

**Cara cepat (untuk testing lokal):**

1.  **Jalankan Tanpa Install:**
    ```bash
    npx cloudflared tunnel --url http://localhost:3000
    ```
2.  **Dapatkan URL:** Cari baris yang berisi link `https://...trycloudflare.com` di output terminal.

**Untuk remote server (persistent):**

Gunakan PM2 (paling mudah):
```bash
# Install PM2
npm install -g pm2

# Start Next.js server
pm2 start npm --name "myspire-dev" -- run dev

# Start Cloudflare tunnel
pm2 start npx --name "cloudflare-tunnel" -- cloudflared tunnel --url http://localhost:3000

# Dapatkan URL tunnel
pm2 logs cloudflare-tunnel --lines 50 | grep -o "https://.*\.trycloudflare\.com"

# Save config (auto-restart on reboot)
pm2 save
pm2 startup
```

Lihat [Deployment_Guide.md](./Deployment_Guide.md) untuk metode lain (Screen, Tmux, Systemd).

---

> [!TIP]
> **Vercel** tetap merupakan pilihan terbaik untuk mockup jangka panjang jika Anda bisa menghubungkan repository GitHub, karena memberikan URL `*.vercel.app` yang gratis dan permanen.
