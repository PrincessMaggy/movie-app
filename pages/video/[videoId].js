import {useRouter} from 'next/router';
import styles from '../../styles/Video.module.css';
import Modal from 'react-modal';
import cls from 'classnames';
import {getYoutubeVideoById} from '@/lib/videos';
Modal.setAppElement('#__next');

export async function getStaticProps() {
    const videoId = 'mYfJxlgR2jw';
    const videoArr = await getYoutubeVideoById(videoId);

    return {
        props: {
            video: videoArr.length > 0 ? videoArr[0] : {},
        },
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const listOfVideos = ['mYfJxlgR2jw', '4zH5iYM4wJo', 'KCPEHsAViiQ'];

    const paths = listOfVideos.map((videoId) => ({
        params: {videoId},
    }));

    return {paths, fallback: 'blocking'};
}

const Video = ({video}) => {
    const router = useRouter();

    const {
        title,
        publishTime,
        description,
        channelTitle,
        statistics: {viewCount},
    } = video;
    return (
        <div className={styles.container}>
            <Modal
                className={styles.modal}
                isOpen={true}
                onRequestClose={() => router.back()}
                overlayClassName={styles.overlay}
                contentLabel='Watch the trailer'
            >
                <iframe
                    id='ytplayer'
                    type='text/html'
                    width='100%'
                    height='360'
                    className={styles.videoPlayer}
                    src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com`}
                    frameBorder='0'
                ></iframe>
                <div className={styles.modalBody}>
                    <div className={styles.modalBodyContent}>
                        <div className={styles.col1}>
                            <p className={styles.publishTime}>{publishTime}</p>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </div>
                        <div className={styles.col2}>
                            <p
                                className={cls(
                                    styles.subText,
                                    styles.subTextWrapper,
                                )}
                            >
                                <span className={styles.textColor}>Cast: </span>
                                <span className={styles.channelTitle}>
                                    {channelTitle}
                                </span>
                            </p>
                            <p
                                className={cls(
                                    styles.subText,
                                    styles.subTextWrapper,
                                )}
                            >
                                <span className={styles.textColor}>
                                    View Count:{' '}
                                </span>
                                <span className={styles.channelTitle}>
                                    {viewCount}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Video;
