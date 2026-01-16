import styles from '../page.module.css';

export default function AboutPage() {
    return (
        <main className="container" style={{ padding: '80px 0' }}>
            <h1 className={styles.title} style={{ textAlign: 'center', marginBottom: '40px' }}>Company Overview</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
                <p>
                    PT Menara Keningar Global (PT MKG) adalah perusahaan yang bergerak di bidang
                    pengembangan brand dan produk dengan pendekatan strategis, efisien, dan berorientasi pada pasar.
                </p>
                <p style={{ marginTop: '20px' }}>
                    Didirikan pada 17 Oktober 2025 oleh Ibu Deffi, PT MKG dibangun atas keyakinan bahwa
                    penjualan merupakan fondasi utama dalam menciptakan pertumbuhan bisnis yang berkelanjutan.
                </p>
                <p style={{ marginTop: '20px' }}>
                    PT MKG menaungi beberapa divisi utama, yaitu Brand Line (MY SPIRE),
                    Giftbox Division, dan Export Division. Setiap divisi dikembangkan
                    untuk menjawab kebutuhan pasar yang berbeda, namun tetap terintegrasi dalam satu ekosistem bisnis
                    yang berfokus pada kualitas, relevansi, dan nilai jangka panjang bagi pengguna.
                </p>
            </div>

            <div style={{ marginTop: '60px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '30px', fontSize: '1.8rem' }}>Available on Marketplace</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto', overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <img
                        src="/images/products/marketplace-001.png"
                        alt="Myspire Marketplace"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>
            </div>
        </main>
    );
}
