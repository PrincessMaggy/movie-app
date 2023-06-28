import Image from 'next/image';
import styles from './card.module.css';
const Card = (props) => {
    const {imgUrl, size} = props;

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };

    return (
        <div className='styles.container'>
            card
            <div className={classMap[size]}>
                <Image
                    className='styles.cardImg'
                    src={imgUrl}
                    alt='img'
                    layout='fill'
                />
            </div>
        </div>
    );
};
export default Card;
