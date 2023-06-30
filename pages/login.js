import Head from 'next/head';
import styles from '../styles/Login.module.css';

const Login = () => {
    const handleLoginWithEmail = (e) => {
        e.preventDefault();
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Watchflix signIn</title>
            </Head>
            <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <a href='/' className={styles.logoLink}>
                        <div
                            className={styles.logoWrapper}
                            style={{color: 'rbg(220,38,38)', fontSize: '2rem'}}
                        >
                            WATCHFLIX
                        </div>
                    </a>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.mainWrapper}>
                    <h1 className={styles.signinHeader}>Sign In</h1>
                    <input
                        className={styles.emailInput}
                        type='text'
                        placeholder='Email address'
                    />
                    <p className={styles.userMsg}></p>
                    <button
                        className={styles.loginBtn}
                        onClick={handleLoginWithEmail}
                    >
                        SIgn In
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
