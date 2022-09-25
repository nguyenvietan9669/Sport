import classnames from 'classnames/bind'
import styles from './Contact.module.scss'

const cx = classnames.bind(styles)

function Contact() {
    return ( <div className={cx('wrapper')}>
        <div className={cx('left')}>
            <span className={cx('bar')}/>
            <div className={cx('title')}>
                <div className={cx('item')}>
                    <span className={cx('text','stroke-text')}>READY TO</span>
                    <span className={cx('text')}>LEVEL UP</span>
                </div>
                <div className={cx('item')}>
                    <span className={cx('text')}>YOUR BODY</span>
                    <span className={cx('text','stroke-text')}>WITH US?</span>
                </div>
            </div>
        </div>
        <div className={cx('right')}>
           <div className={cx('email')}>
             <input
                 className={cx('input')}
                 placeholder='Enter your Email Address here...'
             />
             <button className={cx('btn-join')}>Join now</button>
           </div>
        </div>
    </div> );
}

export default Contact;