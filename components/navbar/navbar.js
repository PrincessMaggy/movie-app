import styles from './navbar.module.css';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {magic} from '../../lib/magicClient';

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [username, setUsername] = useState('');
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            try {
                const {email} = await magic.user.getMetadata();
                setUsername(email);
            } catch (e) {
                console.log(e, 'error retrieving email');
            }
        }
        fetchData();
    }, []);
    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push('/');
    };

    const handleonClickMyList = (e) => {
        e.preventDefault();
        router.push('/browse/mylist');
    };

    const handleShowDropdown = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink} href='/'>
                    <div
                        className={styles.logoWrapper}
                        style={{color: 'rbg(220,38,38)', fontSize: '2rem'}}
                    >
                        WATCHFLIX
                    </div>
                </a>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnClickHome}>
                        Home
                    </li>
                    <li
                        className={styles.navItem}
                        onClick={handleonClickMyList}
                    >
                        My list
                    </li>
                </ul>
                <nav className={styles.navContainer}>
                    <div>
                        <button
                            className={styles.usernameBtn}
                            onClick={handleShowDropdown}
                        >
                            <p className={styles.username}>{username}</p>
                            <Image
                                src='/static/expand_more.svg'
                                width='32'
                                height='32'
                                alt='expand-more'
                            />
                            {/* Expand more icon */}
                        </button>
                        {showDropdown && (
                            <div className={styles.navDropdown}>
                                <div>
                                    <Link
                                        href='/login'
                                        className={styles.linkName}
                                    >
                                        Sign Out
                                    </Link>
                                    <div className={styles.lineWrapper}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
