# Myspire Web - Walkthrough

We have successfully built the **Myspire Web** premium bag marketplace. This project combines high-end luxury aesthetics with robust functional features.

## 🏗️ What We Built

### 1. Premium Design System
-   **Typography**: *Playfair Display* for headings (Luxury feel), *Lato* for body.
-   **Color Palette**: Forest Green (`#1F3324`), Cream (`#F9F8F6`), and Burgundy Accents.
-   **Styling**: Pure **Vanilla CSS** with CSS Variables for performance and clean code.

### 2. Core Features
-   **Landing Page**: 
    -   **Hero Section**: Gradient background (green to blue) with white card overlay
    -   **Interactive Category Slider**: Auto-play carousel with swipe support on mobile
    -   **Bestsellers Section**: Product grid showcasing featured items
    -   **Editorial Storytelling Block**: Premium brand narrative
    -   **Fully Responsive**: Optimized for iPhone 15, Samsung S24/S25, and all devices
-   **Shop Page**:
    -   Sidebar with Categories, Colors, and Price filters
    -   Sortable Grid layout
    -   **Product Cards**: Custom component with "Quick Add" and image swap on hover
-   **Product Detail Page (PDP)**:
    -   Dynamic routes for individual products (`/shop/[slug]`)
    -   Interactive image gallery with thumbnails
    -   Color selection with visual indicators
    -   Quantity selector
    -   Add to Cart functionality
-   **Shopping Cart**:
    -   Global state management with CartContext
    -   Cart persistence (localStorage)
    -   Dynamic cart count badge in header
    -   Full cart page with item management
    -   Quantity updates and item removal
    -   Real-time order summary
-   **Authentication**:
    -   Combined Login/Sign-up flow with a clean, centered design

### 3. Recent Updates (January 2026)
-   ✅ **Product Details & Cart System**: Full e-commerce flow from product browsing to cart management
    -   Interactive PDP with image galleries and variant selection
    -   Shopping cart with persistence and state management
    -   Centralized product data library (`lib/products.js`)
-   ✅ **Bug Fixes**: 
    -   Fixed oversized product cards in Bestsellers (CSS class correction)
    -   Unified product data across home and shop pages
    -   Added missing CSS spacing variables
-   ✅ **Original Design Restored**: Gradient hero with "Design for your routine activity" text
-   ✅ **Category Slider**: Converted static grid to interactive carousel with:
    -   Auto-play (5-second intervals)
    -   Touch swipe gestures for mobile
    -   Navigation buttons and dot indicators
    -   4:3 aspect ratio optimized for mobile viewing
-   ✅ **Mobile Responsiveness**: Fixed horizontal overflow on all devices
    -   Viewport configuration added
    -   Fluid typography with `clamp()`
    -   Tested on iPhone 15 Pro (393px), S24 (360px), S25 Ultra (412px)

### 4. Documentation & Asset Management
-   **Docs Folder**: Centralized documentation in `DOCS/` covering Installation, Design System, and Project Structure
-   **Image Management**: Dedicated `public/images/products` folder for easy content updates
-   **Data Architecture**: 
    -   Centralized product data in `src/lib/products.js`
    -   Helper functions: `getAllProducts()`, `getProductBySlug()`, `getRelatedProducts()`, `formatPrice()`
    -   Global cart state management with `src/context/CartContext.js`
    -   Cart persistence using browser localStorage

---

## 🔬 Research Process
We started by analyzing two key reference sites to determine the direction.

### Reference 1: Strathberry (Aesthetics)
We adopted their minimalist header and use of serif fonts.

### Reference 2: Elizabeth.co.id (Structure)
We used their practical grid layout and filter structure for the Shop page.

### Reference 3: https://www.michaelkors.global/id/en/ (simplicity)

### Reference 4: https://www.longchamp.com/id/id/ (simplicity)

### Reference 5: https://id.christyng.com/ (idea of the landing page in mobile view)


---

## 🚀 How to Run

1.  **Install**: `npm install`
2.  **Dev Server**: `npm run dev`
3.  **Build**: `npm run build`
4.  **Persistent Deployment (Dev Mode + Tunnel)**:
    ```bash
    # Ensure PM2 is installed globally
    npm install -g pm2

    # Start dev server & cloudflare tunnel
    pm2 start npm --name "myspire-dev" -- run dev
    pm2 start npx --name "cloudflare-tunnel" -- cloudflared tunnel --url http://localhost:3000
    ```

The application is running with **PM2** for process management, ensuring it stays alive after SSH disconnection.

---

## 📚 Additional Documentation
- [Project Status & Changelog](./Project_Status.md) - Record of project updates and roadmap
- [Auth Implementation Plan](./Auth_Implementation_Plan.md) - Plan for SQLite authentication system
- [Mockup Sharing Guide](./Mockup_Sharing_Guide.md) - Free & temporary ways to share your work
- [Setup and Installation](./Setup_and_Installation.md) - Getting started guide
- [Design System & Assets](./Design_and_Assets.md) - Colors, fonts, and image management
- [Technical Overview](./Technical_Overview.md) - Tech stack and project structure
