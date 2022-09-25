import classnames from 'classnames/bind'
import styles from './Footer.module.scss'
import inta  from '../../../assets/instagram.png'
import github  from '../../../assets/github.png'
import linkedin  from '../../../assets/linkedin.png'
import logo  from '../../../assets/logo.png'

const cx = classnames.bind(styles)


function Footer() {
    return ( <div className={cx('footer')}>
       <div className={cx('wrapper')}>
        <div className={cx('blur','footer-blur-left')}></div>
        <div className={cx('blur','footer-blur-right')}></div>
         <div className={cx('list-icon')}>
             <img 
                 src = {inta}
                 className={cx('icon')} 
             />
             <img 
                 src = {github}
                 className={cx('icon')} 
             />
             <img 
                 src = {linkedin}
                 className={cx('icon')} 
             />
         </div>
         <img 
             src = {logo}
             className={cx('logo')} 
         />
       </div>
    </div> );
}

export default Footer;