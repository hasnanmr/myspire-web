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

## Opsi 3: Cloudflare Tunnel (Sangat Stabil)
Sangat stabil dan memberikan URL `trycloudflare.com` secara otomatis.

1.  **Jalankan Tanpa Install:**
    ```bash
    npx cloudflared tunnel --url http://localhost:3000
    ```
2.  **Dapatkan URL:** Cari baris yang berisi link `https://...trycloudflare.com` di output terminal.

---

> [!TIP]
> **Vercel** tetap merupakan pilihan terbaik untuk mockup jangka panjang jika Anda bisa menghubungkan repository GitHub, karena memberikan URL `*.vercel.app` yang gratis dan permanen.
