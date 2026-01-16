# Getting Started with Myspire

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn

## Installation
1.  **Clone the repository** (if not already local).
2.  **Install dependencies**:
    ```bash
    npm install
    ```

## 🚀 Persistent Mockup Deployment
To keep the website accessible via a public URL even after closing your terminal/SSH session:

1.  **Install PM2**:
    ```bash
    npm install -g pm2
    ```
2.  **Start Services**:
    ```bash
    pm2 start npm --name "myspire-dev" -- run dev
    pm2 start npx --name "cloudflare-tunnel" -- cloudflared tunnel --url http://localhost:3000
    ```
3.  **Get Public URL**:
    ```bash
    pm2 logs cloudflare-tunnel --lines 50 | grep -o "https://.*\.trycloudflare\.com"
    ```

## Manual Verification
Open [http://localhost:3000](http://localhost:3000) (local) or your Cloudflare URL (public) to see the results.
