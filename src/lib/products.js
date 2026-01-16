export const PRODUCTS = [
    {
        id: 1,
        slug: "snap-pouch-mini",
        name: "Snap Pouch Mini",
        price: 180000,
        currency: "Rp",
        image: "/images/products/pouch/pouch-001.jpg",
        hoverImage: "/images/products/pouch/pouch-002.jpg",
        images: [
            "/images/products/pouch/pouch-001.jpg",
            "/images/products/pouch/pouch-002.jpg",
            "/images/products/pouch/pouch_003.jpeg"
        ],
        description: "Compact, versatile, and ready for anything. The Snap Pouch Mini keeps your essentials organized and accessible. Crafted from premium materials for durability and style.",
        colors: [
            { name: "Black", hex: "#000000", id: "black" },
            { name: "Navy Blue", hex: "#1F3A5F", id: "navy" }
        ],
        category: 'pouch',
        isNew: true
    },
    {
        id: 2,
        slug: "core-sling-bag",
        name: "CORE Sling Bag",
        price: 250000,
        currency: "Rp",
        image: "/images/products/slingbag/sling-001.jpg",
        hoverImage: "/images/products/slingbag/sling-002.jpg",
        images: [
            "/images/products/slingbag/sling-001.jpg",
            "/images/products/slingbag/sling-002.jpg",
            "/images/products/slingbag/sling-003.jpeg"
        ],
        description: "The CORE Sling Bag is your perfect daily companion. Lightweight yet spacious enough for your tablet, wallet, and keys. Features a modern design that fits any outfit.",
        colors: [
            { name: "Black", hex: "#000000", id: "black" },
            { name: "Navy Blue", hex: "#1F3A5F", id: "navy" }
        ],
        category: 'slingbag',
        isNew: false
    },
    {
        id: 3,
        slug: "versa-carry-tote-pack",
        name: "Versa Carry Tote Pack",
        price: 490000,
        currency: "Rp",
        image: "/images/products/totepack/pack-001.jpg",
        hoverImage: "/images/products/totepack/pack-002.jpg",
        images: [
            "/images/products/totepack/pack-001.jpg",
            "/images/products/totepack/pack-002.jpg",
            "/images/products/totepack/tote-003.jpeg"
        ],
        description: "Switch seamlessly between a tote and a backpack. The Versa Carry Tote Pack offers maximum flexibility for the urban commuter. Includes a padded laptop sleeve.",
        colors: [
            { name: "Black", hex: "#000000", id: "black" },
            { name: "Navy Blue", hex: "#1F3A5F", id: "navy" }
        ],
        category: 'totepack',
        isNew: false
    },
];

export function getAllProducts() {
    return PRODUCTS;
}

export function getProductBySlug(slug) {
    return PRODUCTS.find(product => product.slug === slug);
}

export function getRelatedProducts(currentSlug, category) {
    return PRODUCTS.filter(product => product.category === category && product.slug !== currentSlug).slice(0, 3);
}

// Format price with dots (e.g., 180.000)
export function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
