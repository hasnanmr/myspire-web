# Greenspire Web - Walkthrough

We have successfully built the **Greenspire Web** premium bag marketplace. This project combines the high-end aesthetic of *Strathberry* with the robust functionality of *Elizabeth.co.id*.

## 🏗️ What We Built

### 1. Premium Design System
-   **Typography**: *Playfair Display* for headings (Luxury feel), *Lato* for body.
-   **Color Palette**: Forest Green (`#1F3324`), Cream (`#F9F8F6`), and Burgundy Accents.
-   **Styling**: Pure **Vanilla CSS** with CSS Variables for performance and clean code.

### 2. Core Features
-   **Landing Page**: Hero section, "Shop by Category" grid, and Editorial storytelling block.
-   **Shop Page**:
    -   Sidebar with Categories, Colors, and Price filters.
    -   Sortable Grid layout.
    -   **Product Cards**: Custom component with "Quick Add" and image swap on hover.
-   **Authentication**:
    -   Combined Login/Sign-up flow with a clean, centered design.

### 3. Documentation & Asset Management
-   **Docs Folder**: Centralized documentation in `DOCS/` covering Installation, Design System, and Project Structure.
-   **Image Management**: Dedicated `public/images/products` folder for easy content updates.

---

## 🔬 Research Process
We started by analyzing two key reference sites to determine the direction.

### Reference 1: Strathberry (Aesthetics)
We adopted their minimalist header and use of serif fonts.

### Reference 2: Elizabeth.co.id (Structure)
We used their practical grid layout and filter structure for the Shop page.

---

## 🚀 How to Run
## 🚀 How to Run
1.  **Install**: `npm install`
2.  **Dev Server**: `npm run dev`
3.  **Build**: `npm run build`
4.  **Production (Background)**: `pm2 start npm --name "myspire-web" -- start`

The application is now production-ready and running with **PM2** for process management.

---

## 📚 Additional Documentation
- [Project Status & Changelog](./Project_Status.md) - Record of project updates and roadmap
- [Auth Implementation Plan](./Auth_Implementation_Plan.md) - Plan for SQLite authentication system
- [Setup and Installation](./Setup_and_Installation.md) - Getting started guide
- [Design System & Assets](./Design_and_Assets.md) - Colors, fonts, and image management
- [Technical Overview](./Technical_Overview.md) - Tech stack and project structure
