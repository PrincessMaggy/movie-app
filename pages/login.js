import Head from 'next/head';
import {useState} from 'react';
import {useRouter} from 'next/router';
import styles from '../styles/Login.module.css';

const Login = () => {
    const router = useRouter();
    const [userMsg, setUserMsg] = useState('');
    const [email, setEmail] = useState('');
    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
        setUserMsg('');
    };
    const handleLoginWithEmail = (e) => {
        e.preventDefault();
        console.log(email);

        if (email) {
            setUserMsg('');
            router.push('/');
        } else {
            setUserMsg('Enter a valid email address');
        }
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
                        value={email}
                        placeholder='Email address'
                        onChange={handleOnChangeEmail}
                    />
                    <p className={styles.userMsg}>{userMsg}</p>
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
