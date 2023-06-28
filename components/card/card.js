import Image from 'next/image';
import {useState} from 'react';
import styles from './card.module.css';
const Card = (props) => {
    const {imgUrl, size} = props;
    const [imgSrc, setImgSrc] = useState(imgUrl);
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };
    const handleError = () => {
        setImgSrc(
            'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80',
        );
    };
    return (
        <div className={styles.container}>
            card
            <div className={classMap[size]}>
                <Image
                    className={styles.cardImg}
                    src={imgSrc}
                    alt='img'
                    layout='fill'
                    onError={handleError}
                />
            </div>
        </div>
    );
};
export default Card;
