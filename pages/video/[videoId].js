import {useRouter} from 'next/router';
import styles from '../../styles/Video.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#__next');

const Video = () => {
    const router = useRouter();

    return (
        <div>
            {router.query.videoId}
            <Modal
                isOpen={true}
                onRequestClose={() => {}}
                overlayClassName={styles.overlay}
                contentLabel='Watch the trailer'
            >
                <div>Modal body</div>
            </Modal>
        </div>
    );
};

export default Video;
