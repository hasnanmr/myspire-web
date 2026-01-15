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
        isNew = false
    } = product || {};

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {salePrice && <span className={styles.badge}>Sale</span>}
                {isNew && !salePrice && <span className={styles.badge} style={{ backgroundColor: 'var(--color-primary)' }}>New in</span>}

                {/* Main Image - using standard img tag for simplicity with local files, Next Image would require width/height or fill */}
                <img src={image} alt={name} className={styles.image} />
                {/* Hover Image */}
                <img src={hoverImage} alt={`${name} alternate view`} className={styles.hoverImage} />

                <div className={styles.actions}>
                    <button className={styles.quickAdd}>Quick Add</button>
                </div>
            </div>

            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.priceContainer}>
                    <span className={`${styles.price} ${salePrice ? styles.strikethrough : ''}`}>
                        {currency} {price}
                    </span>
                    {salePrice && <span className={styles.salePrice}>{currency} {salePrice}</span>}
                </div>

                <div className={styles.colors}>
                    {colors.map((color, idx) => (
                        <div
                            key={idx}
                            className={styles.colorDot}
                            style={{ backgroundColor: color }}
                            title="Color option"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
