import classnames from 'classnames/bind'
import styles from './CategoryItem.module.scss'
import arrow  from '../../assets/rightArrow.png'

const cx = classnames.bind(styles)

function CategoryItem({icon,title,des}) {
    return ( <div className={cx('wrapper')} >
        <img className={cx('icon')} src ={icon} />
        <span className={cx('title')}>{title}</span>
        <span className={cx('des')}>{des}</span>
        <div className={cx('btn')}>
            <div className={cx('btn-join')}>Join Now</div>
            <img className={cx('arrow')} src = {arrow}/>
        </div>
    </div> );
}

export default CategoryItem;