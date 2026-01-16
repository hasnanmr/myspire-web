import Link from 'next/link';
import { Search, User, ShoppingBag } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                {/* Left Navigation: Collections */}
                <nav className={styles.leftNav}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/shop" className={styles.navLink}>Shop All</Link>
                    <Link href="/new-arrivals" className={styles.navLink}>New Arrivals</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                </nav>

                {/* Center Logo */}
                <Link href="/" className={styles.logo}>
                    Myspire
                </Link>

                {/* Right Navigation: Tools */}
                <div className={styles.rightNav}>
                    <button className={`${styles.iconBtn} ${styles.searchBtn}`} aria-label="Search">
                        <Search size={20} strokeWidth={1.5} />
                    </button>
                    <Link href="/login" className={`${styles.iconBtn} ${styles.accountBtn}`} aria-label="Account">
                        <User size={20} strokeWidth={1.5} />
                        <span className={styles.loginLabel}>Login</span>
                    </Link>
                    <button className={`${styles.iconBtn} ${styles.cartBtn}`} aria-label="Cart">
                        <ShoppingBag size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </header>
    );
}
