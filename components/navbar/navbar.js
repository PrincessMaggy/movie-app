import styles from './navbar.module.css';
import {useRouter} from 'next/router';
import Link from 'next/link';

const NavBar = (props) => {
    const {username} = props;
    const router = useRouter();

    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push('/');
    };

    const handleonClickMyList = (e) => {
        e.preventDefault();
        router.push('/browse/mylist');
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink} href='/'>
                    <div className='styles.logoWrapper' style={{color: 'red'}}>
                        Watchflix
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
                        <button className={styles.usernameBtn}>
                            <p className={styles.username}>{username}</p>
                            {/* Expand more icon */}
                        </button>

                        <div className={styles.navDropdown}>
                            <div>
                                <Link href='/login' className={styles.linkName}>
                                    Sign Out
                                </Link>
                                <div className={styles.lineWrapper}></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
