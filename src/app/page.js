import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import styles from './home.module.css';

export default function Home() {
  // Product data with real images - Rupiah pricing
  const bestsellers = [
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

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Trendy, design for your routine activity</h1>
          <p className={styles.heroSubtitle}>Premium bags crafted for everyday adventures.</p>
          <Link href="/shop" className="btn btn-primary">
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Families</h2>
          <span className={styles.sectionSubtitle}>Shop by Category</span>
        </div>

        <div className={styles.categoryGrid}>
          {[
            { name: 'Pouch', path: 'pouch', image: '/images/products/pouch/pouch_003.jpeg' },
            { name: 'Sling Bag', path: 'slingbag', image: '/images/products/slingbag/sling-003.jpeg' },
            { name: 'Tote Pack', path: 'totepack', image: '/images/products/totepack/tote-003.jpeg' }
          ].map((cat) => (
            <Link href={`/shop?category=${cat.path}`} key={cat.path} className={styles.categoryCard} style={{ backgroundImage: `url(${cat.image})` }}>
              <div className={styles.categoryContent}>
                <h3>{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers Preview */}
      <section className={`${styles.section} container`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Bestsellers</h2>
          <Link href="/shop" className="btn btn-outline" style={{ marginTop: '1rem' }}>
            View All
          </Link>
        </div>

        <div className={styles.productGrid}>
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial / Brand Story */}
      <section className={styles.editorial}>
        <div className={`${styles.editorialGrid} container`}>
          <div className={styles.editorialImage}></div>
          <div className={styles.editorialContent}>
            <h2>The Art of Craftsmanship</h2>
            <p>
              Each Myspire piece is a testament to patience and precision.
              Sourced from the finest tanneries and assembled by master artisans,
              our bags are designed to evolve with you, gaining character and beauty over time.
            </p>
            <Link href="/our-story" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
