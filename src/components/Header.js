'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { getCartCount } = useCart();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const cartCount = mounted ? getCartCount() : 0;

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.navContainer}`}>
                    {/* Left: Mobile Menu Toggle & Desktop Nav */}
                    <div className={styles.leftSection}>
                        <button
                            className={styles.mobileMenuToggle}
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu size={24} strokeWidth={1.5} />
                        </button>

                        <nav className={styles.desktopNav}>
                            <Link href="/" className="hover:opacity-50 transition-opacity tracking-widest text-xs font-medium">HOME</Link>
                            <Link href="/shop" className="hover:opacity-50 transition-opacity tracking-widest text-xs font-medium">SHOP ALL</Link>
                            <Link href="/new-arrivals" className="hover:opacity-50 transition-opacity tracking-widest text-xs font-medium">NEW ARRIVALS</Link>
                            <Link href="/about" className="hover:opacity-50 transition-opacity tracking-widest text-xs font-medium">ABOUT</Link>
                        </nav>
                    </div>

                    {/* Center: Logo */}
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoText}>MYSPIRE</span>
                    </Link>

                    {/* Right: Tools */}
                    <div className={styles.rightSection}>
                        <div className={styles.iconGroup}>
                            <button className={styles.iconBtn} aria-label="Search">
                                <Search size={20} strokeWidth={1.5} />
                            </button>
                            <Link href="/login" className={styles.iconBtn} aria-label="Account">
                                <User size={20} strokeWidth={1.5} />
                            </Link>
                            <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
                                <div className={styles.cartBtnWrapper}>
                                    <ShoppingBag size={20} strokeWidth={1.5} />
                                    {cartCount > 0 && (
                                        <span className={styles.cartBadge}>{cartCount}</span>
                                    )}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.drawerOpen : ''}`}>
                <div className={styles.drawerHeader}>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        <X size={28} strokeWidth={1} />
                    </button>
                </div>

                <nav className={styles.drawerNav}>
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
                    <Link href="/shop" onClick={() => setIsMenuOpen(false)}>SHOP ALL</Link>
                    <Link href="/new-arrivals" onClick={() => setIsMenuOpen(false)}>NEW ARRIVALS</Link>
                    <Link href="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
                </nav>

                <div className={styles.drawerFooter}>
                    <p>© 2026 MYSPIRE</p>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
            )}
        </>
    );
}
