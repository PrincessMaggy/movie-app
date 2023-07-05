import {useRouter} from 'next/router';
import styles from '../../styles/Video.module.css';
import Modal from 'react-modal';
import cls from 'classnames';
import {getYoutubeVideoById} from '@/lib/videos';
import Head from 'next/head';
import NavBar from '@/components/navbar/navbar';
Modal.setAppElement('#__next');

export async function getStaticProps(context) {
    const videoId = context.params.videoId;
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

    const {title, publishTime, description, channelTitle, statistics} = video;
    return (
        <>
            <Head>
                <title>Watchflix</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <NavBar />
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
                                <p className={styles.publishTime}>
                                    {publishTime}
                                </p>
                                <p className={styles.title}>{title}</p>
                                <p className={styles.description}>
                                    {description}
                                </p>
                            </div>
                            <div className={styles.col2}>
                                <p
                                    className={cls(
                                        styles.subText,
                                        styles.subTextWrapper,
                                    )}
                                >
                                    <span className={styles.textColor}>
                                        Cast:{' '}
                                    </span>
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
                                        {statistics}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default Video;
