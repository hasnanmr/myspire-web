'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
    // Placeholder data if no product provided
    const {
        name = "Mosaic Shopper",
        price = "495.000",
        currency = "Rp",
        salePrice = null,
        image = "/images/products/placeholder.jpg",
        hoverImage = "/images/products/placeholder-hover.jpg",
        colors = ['#000', '#F5F5DC', '#8B4513'],
        isNew = false,
        slug = "mosaic-shopper" // Added slug with a default value
    } = product || {};

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/shop/${slug}`} className={styles.imageContainer}>
                {salePrice && <span className={styles.badge}>Sale</span>}
                {isNew && !salePrice && <span className={styles.badge} style={{ backgroundColor: 'var(--color-primary)' }}>New in</span>}

                <img
                    src={image}
                    alt={name}
                    className={styles.image}
                />
                <img
                    src={hoverImage}
                    alt={`${name} hover`}
                    className={styles.hoverImage}
                />

                <button className={styles.quickAddBtn}>
                    <Plus size={18} strokeWidth={1.5} /> Quick Add
                </button>
            </Link>

            <div className={styles.productInfo}>
                <div className={styles.headerRow}>
                    <Link href={`/shop/${slug}`}>
                        <h3 className={styles.productName}>{name}</h3>
                    </Link>
                    <span className={styles.price}>{currency} {price}</span>
                </div>

                {colors.length > 0 && (
                    <div className={styles.colorSwatches}>
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className={styles.swatch}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
