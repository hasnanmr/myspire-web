import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import CategorySlider from '@/components/CategorySlider';
import { getAllProducts, formatPrice } from '@/lib/products';
import styles from './home.module.css';

export default function Home() {
  // Get all products from the centralized library
  const allProducts = getAllProducts();

  // Transform products for ProductCard display (format price and extract color hex codes)
  const bestsellers = allProducts.map(p => ({
    ...p,
    price: formatPrice(p.price),
    colors: p.colors.map(c => c.hex) // Extract hex codes for card preview
  }));

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroCard}>
          <h1 className={styles.heroTitle}>Design for your routine activity</h1>
          <Link href="/shop" className={styles.heroButton}>
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <p className={styles.sectionSubtitle}>Premium Craftsmanship for Every Lifestyle</p>
        </div>

        <CategorySlider
          categories={[
            { name: 'Pouch', path: 'pouch', image: '/images/products/pouch/pouch_003.jpeg' },
            { name: 'Sling bag', path: 'slingbag', image: '/images/products/slingbag/sling-003.jpeg' },
            { name: 'Carry Totepack', path: 'totepack', image: '/images/products/totepack/tote-003.jpeg' }
          ]}
        />
      </section>

      {/* Bestsellers Preview */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Bestsellers</h2>
          <p className={styles.sectionSubtitle}>Most Loved by Our Community</p>
        </div>

        <div className={styles.productGrid}>
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
          <Link href="/shop" className="btn btn-outline">
            View All Products
          </Link>
        </div>
      </section>

      {/* Editorial / Brand Story */}
      <section className={styles.editorial}>
        <div className={`${styles.editorialGrid} container`}>
          <div className={styles.editorialImage}>
            <img
              src="/images/products/totepack/custom-001.png"
              alt="Myspire Craftsmanship"
              style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#F9F9F9' }}
            />
          </div>
          <div className={styles.editorialContent}>
            <span className={styles.sectionSubtitle}>Our Heritage</span>
            <h2>The Art of Craftsmanship</h2>
            <p>
              Every Myspire piece is a testament to patience and precision.
              Handcrafted by local artisans with unparalleled attention to detail,
              ensuring your bag is as unique as your inspiration.
            </p>
            <Link href="/about" className="btn btn-outline">
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
