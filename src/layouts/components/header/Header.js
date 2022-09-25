import classnames from 'classnames/bind'
import styles from './Header.module.scss'
import Logo from '../../../assets/logo.png'

const cx = classnames.bind(styles)

function Header() {
    return ( <div className={cx('wrapper')}>
        <img className={cx('logo')} src={Logo} alt='logo'/>
        <div className={cx('nav-bar')}>
            <span className={cx('nav-item')}>Home</span>
            <span className={cx('nav-item')}>Programs</span>
            <span className={cx('nav-item')}>Why us</span>
            <span className={cx('nav-item')}>Plans</span>
            <span className={cx('nav-item')}>Testimonials</span>
        </div>
    </div> );
}

export default Header;