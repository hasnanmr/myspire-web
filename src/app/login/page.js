import Link from 'next/link';
import styles from './login.module.css';

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>Sign in to access your wishlist and orders.</p>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            placeholder="name@example.com"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className={styles.input}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className={styles.actions}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <Link href="/forgot-password" className={styles.link}>
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                        Sign In
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>OR</span>
                </div>

                <div className={styles.registerContainer}>
                    <p className={styles.subtitle} style={{ marginBottom: '1rem' }}>New to Myspire?</p>
                    <Link href="/register" className="btn btn-outline" style={{ width: '100%' }}>
                        Create an Account
                    </Link>
                </div>
            </div>
        </div>
    );
}
