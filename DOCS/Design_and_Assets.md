# Design System & Asset Management

## 🎨 Design System

We use CSS Variables defined in `src/app/globals.css` to maintain consistency across the Myspire application.

## 🗂️ Component Library

-   **Header**: Global navigation bar with mobile drawer
-   **Footer**: Site footer with links and social media
-   **ProductCard**: E-commerce card with hover states and "Quick Add" button
-   **CategorySlider**: Interactive carousel with auto-play and swipe support (NEW).

### Key Variables
-   **Primary Color**: Forest Green (`#1F3324`) - Used for primary buttons and accents.
-   **Secondary Color**: Navy Blue (`#1F3A5F`) - Used for specific product variants.
-   **Accent Color**: Burgundy (`#862633`) - Used for sales and calls-to-action.
-   **Background**: Cream (`#F9F8F6`) - The main site background for a premium feel.
-   **Fonts**: 
    -   Headings: *Playfair Display* (Serif)
    -   Body: *Lato* (Sans-serif)

---

## 📸 Product Images & Content

To easily manage product photography without complex CMS setups for the initial version, we use a structured static asset folder inside `public/`.

### **Adding New Products**
1.  Navigate to the `public/images/products` directory.
2.  Create a folder for your product category (optional) or place images directly here.
3.  **Naming Convention**: Use descriptive names like `pouch_003.jpeg`, `sling-003.jpeg`, or `tote-003.jpeg`.

### **Recommended Sizes**
-   **Product Cards**: 800x1000px (Portrait)
-   **Hero Banners**: 1920x1080px (Landscape)

### **Directory Structure**
```
/public
  /images
    /products      <-- PUT YOUR BAG PHOTOS HERE
      /totes
      /crossbody
    /hero          <-- Homepage banners
    /editorial     <-- Blog/Story images
```
