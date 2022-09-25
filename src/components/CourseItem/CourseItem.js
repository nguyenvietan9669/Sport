import classnames from 'classnames/bind'
import styles from './CourseItem.module.scss'

const cx = classnames.bind(styles)

function CourseItem({icon,title,cost,listDetail=[],active = false}) {
    return ( <div className={cx('wrapper',{active:active})}>
        <div className={cx('icon')}>
        {icon}
        </div>
        <div className={cx('title')}>{title}</div>
        <div className={cx('cost')}>$ {cost}</div>
        <div className={cx('detail')}>
            {listDetail.map((detailItem,index) => (
                <div key={index} className={cx('detail-item')}>
                    <img className={cx('detail-icon')} src = {detailItem.icon}/>
                    <span className={cx('text')}>{detailItem.title}</span>
                </div>
            ))}
        </div>
        <div className={cx('see-more')}>
            <span className={cx('text-see')}>See more benefit</span>
            <img className={cx('icon-arrow')}/>
        </div>
        <div className={cx('btn-join')}>Join now</div>
    </div> );
}

export default CourseItem;