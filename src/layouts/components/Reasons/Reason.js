import classnames from 'classnames/bind'
import styles from './Reason.module.scss'
import h1 from '../../../assets/image1.png'
import h2 from '../../../assets/image2.png'
import h3 from '../../../assets/image3.png'
import h4 from '../../../assets/image4.png'
import tick from '../../../assets/tick.png'
import nike from '../../../assets/nike.png'
import nb from '../../../assets/nb.png'
import adidas from '../../../assets/adidas.png'

const cx = classnames.bind(styles)

function Reason() {
    return ( <div className={cx('wrapper')}>
        <div className={cx('content-left')}>
            <img className={cx('image1')} src= {h1} />
            <img className={cx('image2')} src= {h2} />
            <img className={cx('image3')} src= {h3} />
            <img className={cx('image4')} src= {h4} />
        </div>
        <div className={cx('content-right')}>
            <div className={cx('some-reason')}>Some Reasons</div>
            <div className={cx('content')}>
               <div className={cx('title')} >
                 <span className={cx('stroke-text')}>Why</span>
                 <span>Choose us ?</span>
               </div>
               <div className={cx('list')}>
                <div className={cx('item')}>
                    <img src= {tick} className={cx('icon')}/>
                    <span className={cx('text')}>OVER 140+ EXPERT COACHS</span>
                </div>
                <div className={cx('item')}>
                    <img src= {tick} className={cx('icon')}/>
                    <span className={cx('text')}>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div><div className={cx('item')}>
                    <img src= {tick} className={cx('icon')}/>
                    <span className={cx('text')}>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div><div className={cx('item')}>
                    <img src= {tick} className={cx('icon')}/>
                    <span className={cx('text')}>RELIABLE PARTNERS</span>
                </div>
               </div>
            </div>
            <div className={cx('partner')}>
                <span className={cx('name')}>OUR PARTNERS</span>
                <div className={cx('list-icon')}>
                    <img className={cx('item-icon')} src ={nike}/>
                    <img className={cx('item-icon')} src ={nb}/>
                    <img className={cx('item-icon')} src ={adidas}/>
                </div>
            </div>
        </div>
    </div> );
}

export default Reason;