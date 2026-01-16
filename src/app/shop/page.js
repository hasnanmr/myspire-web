'use client';

import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { getAllProducts, formatPrice } from '@/lib/products';
import styles from './shop.module.css';

export default function Shop() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');
    const allProducts = getAllProducts();

    // Filter products based on category parameter
    const filteredProducts = categoryParam
        ? allProducts.filter(product => product.category === categoryParam)
        : allProducts;

    // Transform for ProductCard display (format price string)
    const displayProducts = filteredProducts.map(p => ({
        ...p,
        price: formatPrice(p.price),
        colors: p.colors.map(c => c.hex) // Extract hex codes for card preview
    }));


    // Get category name for display
    const getCategoryName = () => {
        if (!categoryParam) return 'All Bags';
        const categoryNames = {
            'pouch': 'Pouch',
            'slingbag': 'Sling Bag',
            'totepack': 'Tote Pack'
        };
        return categoryNames[categoryParam] || 'All Bags';
    };

    return (
        <div className={`container ${styles.pageContainer}`}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1>{getCategoryName()}</h1>
                    <p className={styles.subtitle}>Showing {displayProducts.length} result{displayProducts.length !== 1 ? 's' : ''}</p>
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
                            <li className={styles.filterItem}>
                                <div className={styles.checkbox} />
                                <a href="/shop" style={{ color: !categoryParam ? '#000' : '#666', fontWeight: !categoryParam ? '600' : '400' }}>View All</a>
                            </li>
                            <li className={styles.filterItem}>
                                <div className={styles.checkbox} />
                                <a href="/shop?category=pouch" style={{ color: categoryParam === 'pouch' ? '#000' : '#666', fontWeight: categoryParam === 'pouch' ? '600' : '400' }}>Pouch</a>
                            </li>
                            <li className={styles.filterItem}>
                                <div className={styles.checkbox} />
                                <a href="/shop?category=slingbag" style={{ color: categoryParam === 'slingbag' ? '#000' : '#666', fontWeight: categoryParam === 'slingbag' ? '600' : '400' }}>Sling Bag</a>
                            </li>
                            <li className={styles.filterItem}>
                                <div className={styles.checkbox} />
                                <a href="/shop?category=totepack" style={{ color: categoryParam === 'totepack' ? '#000' : '#666', fontWeight: categoryParam === 'totepack' ? '600' : '400' }}>Tote Pack</a>
                            </li>
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
                    {displayProducts.length > 0 ? (
                        displayProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#666' }}>
                            No products found in this category.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
