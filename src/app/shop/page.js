import ProductCard from '@/components/ProductCard';
import styles from './shop.module.css';

// Mock Product Data
const PRODUCTS = [
    { id: 1, name: "East/West Mini", price: 545, colors: ['#000', '#800020', '#F5F5DC'], isNew: true },
    { id: 2, name: "Mosaic Tote", price: 695, colors: ['#556B2F', '#000'], isNew: false },
    { id: 3, name: "Nano Tote", price: 445, salePrice: 350, colors: ['#FFC0CB', '#fff'], isNew: false },
    { id: 4, name: "Omni Satchel", price: 625, colors: ['#8B4513', '#A52A2A', '#000'], isNew: false },
    { id: 5, name: "Crescent Shoulder", price: 495, colors: ['#000', '#fff'], isNew: true },
    { id: 6, name: "Box Crescent", price: 575, colors: ['#1F3324', '#000'], isNew: false },
    { id: 7, name: "Multrees Chain Wallet", price: 295, colors: ['#800020', '#000'], isNew: false },
    { id: 8, name: "Lana Osette", price: 475, salePrice: 400, colors: ['#F5F5DC', '#8B4513'], isNew: false },
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
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Totes</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Crossbody</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Satchels</li>
                        </ul>
                    </div>

                    <div className={styles.filterGroup}>
                        <h3>Color</h3>
                        <ul className={styles.filterList}>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Black</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Green</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Burgundy</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Cream</li>
                        </ul>
                    </div>

                    <div className={styles.filterGroup}>
                        <h3>Price</h3>
                        <ul className={styles.filterList}>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Under $300</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> $300 - $500</li>
                            <li className={styles.filterItem}><div className={styles.checkbox} /> Over $500</li>
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
