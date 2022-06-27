import classnames from 'classnames/bind';
import styles from './Components.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function Components() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper_title')}>
                <FontAwesomeIcon className={cx('icon')} icon={faGraduationCap} />
                <h1 className={cx('title')}>TRẦN VĂN A</h1>
                <FontAwesomeIcon className={cx('icon')} icon={faGraduationCap} />
            </div>

            <div className={cx('content')}>
                <h2 className={cx('subtitle')}>Sai Gon University</h2>
                <span className={cx('content_span-solid')}>
                    <p>Major: Software technology</p>
                </span>
                <span className={cx('content-span')}>
                    <p>GPA: 3.00/4</p>
                </span>
                <div className={cx('date')}>
                    <span>Oct 2019 - May 2024</span>
                </div>
            </div>
        </div>
    );
}

export default Components;
