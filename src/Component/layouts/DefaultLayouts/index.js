import classnames from 'classnames/bind';
import Components from '../Components';
import styles from './DefaultLayout.module.scss';

const cx = classnames.bind(styles);
function Defaultlayouts() {
    return (
        <div className={cx('wrapper')}>
            <Components />
        </div>
    );
}

export default Defaultlayouts;
