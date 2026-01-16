'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, formatPrice } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';
import { ChevronRight, Minus, Plus } from 'lucide-react';

export default function ProductPage({ params }) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();

    useEffect(() => {
        const foundProduct = getProductBySlug(params.slug);
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedColor(foundProduct.colors[0]); // Default to first color
        }
        setLoading(false);
    }, [params.slug]);

    if (loading) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Loading...</div>;
    if (!product) return notFound();

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedColor);
        // Optional: Add toast notification here
    };

    const handleQuantityChange = (delta) => {
        setQuantity(prev => {
            const newQty = prev + delta;
            return newQty < 1 ? 1 : newQty;
        });
    };

    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.productLayout}>
                {/* Image Gallery */}
                <div className={styles.gallery}>
                    <div className={styles.mainImageWrapper}>
                        <img
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className={styles.mainImage}
                        />
                    </div>
                    <div className={styles.thumbnails}>
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                className={`${styles.thumbnailBtn} ${selectedImage === idx ? styles.active : ''}`}
                                onClick={() => setSelectedImage(idx)}
                            >
                                <img src={img} alt={`View ${idx + 1}`} className={styles.thumbnailImg} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className={styles.info}>
                    <div className={styles.breadcrumbs}>
                        <Link href="/">Home</Link> <ChevronRight size={14} style={{ verticalAlign: 'middle' }} /> {' '}
                        <Link href="/shop">Shop</Link> <ChevronRight size={14} style={{ verticalAlign: 'middle' }} /> {' '}
                        <span>{product.name}</span>
                    </div>

                    <h1 className={styles.title}>{product.name}</h1>
                    <p className={styles.price}>{product.currency} {formatPrice(product.price)}</p>

                    <div className={styles.description}>
                        <p>{product.description}</p>
                    </div>

                    {/* Color Selection */}
                    <div className={styles.optionsSection}>
                        <span className={styles.optionTitle}>Color: {selectedColor?.name}</span>
                        <div className={styles.colorOptions}>
                            {product.colors.map((color) => (
                                <button
                                    key={color.id}
                                    className={`${styles.colorBtn} ${selectedColor?.id === color.id ? styles.selected : ''}`}
                                    style={{ backgroundColor: color.hex }}
                                    onClick={() => setSelectedColor(color)}
                                    aria-label={`Select ${color.name}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Action */}
                    <div className={styles.actions}>
                        <div className={styles.quantitySelector}>
                            <button
                                className={styles.qtyBtn}
                                onClick={() => handleQuantityChange(-1)}
                                aria-label="Decrease quantity"
                            >
                                <Minus size={16} />
                            </button>
                            <span className={styles.qtyInput}>{quantity}</span>
                            <button
                                className={styles.qtyBtn}
                                onClick={() => handleQuantityChange(1)}
                                aria-label="Increase quantity"
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        <button
                            className={styles.addToCartBtn}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
