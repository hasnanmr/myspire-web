import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h4>Customer Services</h4>
                        <ul>
                            <li><Link href="/help" className={styles.footerLink}>Help & FAQs</Link></li>
                            <li><Link href="/shipping" className={styles.footerLink}>Shipping & Returns</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>About Myspire</h4>
                        <ul>
                            <li><Link href="/our-story" className={styles.footerLink}>Our Story</Link></li>
                            <li><Link href="/sustainability" className={styles.footerLink}>Sustainability</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Legal</h4>
                        <ul>
                            <li><Link href="/terms" className={styles.footerLink}>Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="https://linktr.ee/myspireindonesia" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a></li>
                            <li><a href="https://shopee.co.id/myspireindonesia" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Shopee</a></li>
                            <li><a href="https://linktr.ee/myspireindonesia" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Tokopedia</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {new Date().getFullYear()} Myspire. All rights reserved.</p>
                    <p>Designed with Care.</p>
                </div>
            </div>
        </footer>
    );
}
