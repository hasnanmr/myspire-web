'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/products';
import { Trash2, Minus, Plus } from 'lucide-react';
import styles from './page.module.css';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>Your Shopping Bag</h1>
                <div className={styles.emptyState}>
                    <h2>Your bag is currently empty.</h2>
                    <Link href="/shop" className={styles.shopBtn}>
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`container ${styles.container}`}>
            <h1 className={styles.title}>Your Shopping Bag</h1>

            <div className={styles.cartLayout}>
                {/* Cart Items Table */}
                <div className={styles.itemsSection}>
                    <table className={styles.cartTable}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={`${item.id}-${item.selectedColor.id}`} className={styles.cartItemRow}>
                                    <td>
                                        <div className={styles.itemInfo}>
                                            <Link href={`/shop/${item.slug}`}>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className={styles.itemImage}
                                                />
                                            </Link>
                                            <div className={styles.itemDetails}>
                                                <Link href={`/shop/${item.slug}`}>
                                                    <h3>{item.name}</h3>
                                                </Link>
                                                <p className={styles.itemVariant}>Color: {item.selectedColor.name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.price}>{item.currency} {formatPrice(item.price)}</span>
                                    </td>
                                    <td>
                                        <div className={styles.quantityControl}>
                                            <button
                                                className={styles.qtyBtn}
                                                onClick={() => updateQuantity(item.id, item.selectedColor.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className={styles.qtyText}>{item.quantity}</span>
                                            <button
                                                className={styles.qtyBtn}
                                                onClick={() => updateQuantity(item.id, item.selectedColor.id, item.quantity + 1)}
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.itemPrice}>
                                            {item.currency} {formatPrice(item.price * item.quantity)}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className={styles.removeBtn}
                                            onClick={() => removeFromCart(item.id, item.selectedColor.id)}
                                            aria-label="Remove item"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Order Summary */}
                <aside className={styles.summarySection}>
                    <div className={styles.summaryCard}>
                        <h2 className={styles.summaryTitle}>Order Summary</h2>

                        <div className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <span>Rp {formatPrice(getCartTotal())}</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>Shipping</span>
                            <span>Calculated at checkout</span>
                        </div>

                        <div className={styles.totalRow}>
                            <span>Total</span>
                            <span>Rp {formatPrice(getCartTotal())}</span>
                        </div>

                        <button className={styles.checkoutBtn} onClick={() => alert('Checkout flow coming soon!')}>
                            Proceed to Checkout
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
