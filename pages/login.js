import Head from 'next/head';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import styles from '../styles/Login.module.css';
import {magic} from '../lib/magicClient';
import {toast} from 'react-toastify';

const Login = () => {
    const router = useRouter();
    useEffect(() => {
        const handleComplete = () => {
            setLoading(false);
        };
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    const [userMsg, setUserMsg] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
        setUserMsg('');
    };
    const handleLoginWithEmail = async (e) => {
        e.preventDefault();
        if (email) {
            setLoading(true);

            try {
                const didToken = await magic.auth.loginWithMagicLink({
                    email,
                });
                if (didToken) {
                    // setLoading(false);
                    toast.success('Successful login!');
                    setUserMsg('');
                    router.push('/');
                }
            } catch (e) {
                toast.error(`Login unsuccessful! ,${e}`);
                setLoading(false);
            }
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
                        {loading ? 'Loading' : 'Sign In'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
