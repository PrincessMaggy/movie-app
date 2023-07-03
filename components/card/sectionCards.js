import Card from './card';
import Link from 'next/link';
import styles from './sectionCards.module.css';

const SectionCards = (props) => {
    const {title, videos, size} = props;
    return (
        <section className={styles.container}>
            <h2 className={styles.title}> {title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, index) => {
                    return (
                        <Link href={`/video/${video.imgUrl}`}>
                            <Card
                                id={index}
                                imgUrl={video.imgUrl}
                                size={size}
                            />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default SectionCards;
