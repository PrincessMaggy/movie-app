import Image from 'next/image';
import {useState} from 'react';
import styles from './card.module.css';
import {motion} from 'framer-motion';
import cls from 'classnames';

const Card = (props) => {
    const {imgUrl, size, id} = props;
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

    const scale = id === 0 ? {scaleY: 1.1} : {scale: 1.1};
    return (
        <div className={styles.container}>
            <motion.div
                className={cls(styles.imgMotionWrapper, classMap[size])}
                whileHover={{...scale}}
            >
                <Image
                    className={styles.cardImg}
                    src={imgSrc}
                    alt='img'
                    layout='fill'
                    onError={handleError}
                />
            </motion.div>
        </div>
    );
};
export default Card;
