import '@/styles/globals.css';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {magic} from '@/lib/magicClient';
import Loading from '@/components/loading/loading';
export default function App({Component, pageProps}) {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        const checkLoggedInUser = async () => {
            const isLoggedIn = await magic.user.isLoggedIn();
            if (isLoggedIn) {
                router.push('/');
            } else {
                router.push('/login');
            }
        };
        checkLoggedInUser();
    }, []);

    useEffect(() => {
        const handleComplete = () => {
            setIsLoading(false);
        };
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return isLoading ? <Loading /> : <Component {...pageProps} />;
}
