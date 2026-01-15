import ProductCard from '@/components/ProductCard';
import styles from './shop.module.css';

// Product Data - matching bestsellers from homepage
const PRODUCTS = [
    {
        id: 1,
        name: "Pouch Bag",
        price: "180.000",
        currency: "Rp",
        image: "/images/products/pouch/pouch-001.jpg",
        hoverImage: "/images/products/pouch/pouch-002.jpg",
        colors: ['#000000', '#1F3A5F'],
        isNew: true
    },
    {
        id: 2,
        name: "Sling Bag",
        price: "250.000",
        currency: "Rp",
        image: "/images/products/slingbag/sling-001.jpg",
        hoverImage: "/images/products/slingbag/sling-002.jpg",
        colors: ['#000000', '#1F3A5F'],
        isNew: false
    },
    {
        id: 3,
        name: "Tote Pack",
        price: "490.000",
        currency: "Rp",
        image: "/images/products/totepack/pack-001.jpg",
        hoverImage: "/images/products/totepack/pack-002.jpg",
        colors: ['#000000', '#1F3A5F'],
        isNew: false
    },
];

export default function Shop() {
    return (
        <div className={`container ${styles.pageContainer}`}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>All Bags</h1>
                    <p className={styles.subtitle}>Showing {PRODUCTS.length} results</p>
                </div>
                <select className={styles.sortSelect} defaultValue="newest">
                    <option value="newest">Newest Arrivals</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="bestselling">Bestselling</option>
                </select>
            </div>

            <div className={styles.layout}>
                {/* Sidebar Filters */}
                <aside className={styles.sidebar}>
                    <div className={styles.filterGroup}>
                        <h3>Category</h3>
                        <ul className={styles.filterList}>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> View All</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Pouch</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Sling Bag</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Tote Pack</li>
                        </ul>
                    </div>

                    <div className={styles.filterGroup}>
                        <h3>Color</h3>
                        <ul className={styles.filterList}>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Black</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Navy Blue</li>
                        </ul>
                    </div>

                    <div className={styles.filterGroup}>
                        <h3>Price</h3>
                        <ul className={styles.filterList}>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Under Rp200.000</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Rp200.000 - Rp400.000</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Over Rp400.000</li>
                        </ul>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className={styles.productGrid}>
                    {PRODUCTS.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
