import Link from 'next/link';
import { Search, User, ShoppingBag } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                {/* Left Navigation: Collections */}
                <nav className={styles.leftNav}>
                    <Link href="/shop" className={styles.navLink}>Shop All</Link>
                    <Link href="/shop?category=new" className={styles.navLink}>New Arrivals</Link>
                    <Link href="/editorial" className={styles.navLink}>Editorial</Link>
                </nav>

                {/* Center Logo */}
                <Link href="/" className={styles.logo}>
                    Myspire
                </Link>

                {/* Right Navigation: Tools */}
                <div className={styles.rightNav}>
                    <button className={styles.iconBtn} aria-label="Search">
                        <Search size={20} strokeWidth={1.5} />
                    </button>
                    <Link href="/login" className={styles.iconBtn} aria-label="Account">
                        <User size={20} strokeWidth={1.5} />
                    </Link>
                    <button className={styles.iconBtn} aria-label="Cart">
                        <ShoppingBag size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </header>
    );
}
