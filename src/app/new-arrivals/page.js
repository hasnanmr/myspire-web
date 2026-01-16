import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import styles from '../page.module.css';

export default function NewArrivalsPage() {
    // Current brand new products
    const newArrivals = [
        {
            id: 1,
            name: "Snap Pouch Mini",
            price: "180.000",
            currency: "Rp",
            image: "/images/products/pouch/pouch-001.jpg",
            hoverImage: "/images/products/pouch/pouch-002.jpg",
            colors: ['#000000', '#1F3A5F'],
            isNew: true
        },
        {
            id: 2,
            name: "CORE Sling Bag",
            price: "250.000",
            currency: "Rp",
            image: "/images/products/slingbag/sling-001.jpg",
            hoverImage: "/images/products/slingbag/sling-002.jpg",
            colors: ['#000000', '#1F3A5F'],
            isNew: true
        }
    ];

    return (
        <main className="container" style={{ padding: '80px 0' }}>
            <header style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 className={styles.title}>New Arrivals</h1>
                <p style={{ color: '#666', marginTop: '10px' }}>Discover our latest designs for your daily routine.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
                {newArrivals.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <Link href="/shop" className="btn btn-outline">
                    Shop All Products
                </Link>
            </div>
        </main>
    );
}
