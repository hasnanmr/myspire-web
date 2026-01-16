# Technical Overview & Project Structure

## 🛠️ Technology Stack

-   **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
-   **Process Manager**: [PM2](https://pm2.keymetrics.io/) (for background execution)
-   **Tunneling**: [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps) (for public mockup access)
-   **Styling**: Vanilla CSS (Variables & Modules) for pixel-perfect control.
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Fonts**: Google Fonts (Playfair Display for headings, Lato for UI).

## 📂 Project Structure

-   `src/app`: Main application routes.
    -   `page.js`: Landing Page with gradient hero and category slider.
    -   `shop/page.js`: Product Listing Page.
    -   `login/page.js`: Authentication Page.
-   `src/components`: Reusable UI components.
    -   `Header.js`: Persistent navigation.
    -   `Footer.js`: Site footer.
    -   `ProductCard.js`: Standard e-commerce card with hover effects.
    -   `CategorySlider.js`: Interactive carousel with swipe support (NEW).
-   `src/lib`: Utility functions and helper scripts.

## 🎨 Design Features
-   **Responsive Design**: Optimized for mobile-first with breakpoints for tablet and desktop
-   **Touch Gestures**: Native swipe support for category slider on mobile devices
-   **Fluid Typography**: Using CSS `clamp()` for responsive text sizing
-   **Performance**: Vanilla CSS with hardware-accelerated transitions
