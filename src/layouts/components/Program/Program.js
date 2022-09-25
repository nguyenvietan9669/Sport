import classnames from 'classnames/bind'
import styles from './Program.module.scss'
import CategoryItem from '../../../components/CategoryItem';
import dumbell from '../../../assets/dumbell.png'
import flame from '../../../assets/flame.svg'
import heart from '../../../assets/heartHealth.svg'
import running from '../../../assets/runing.svg'
const cx = classnames.bind(styles)

function Program() {
    return ( <div className={cx('wrapper')}>
        <div className={cx('header')}>
            <span className={cx('text','stroke-text')}>EXPLORE OUR</span>
            <span className={cx('text')}>PROGRAMS</span>
            <span className={cx('text','stroke-text')}>TO SHAPE YOU</span>
        </div>
        <div className={cx('category')}>
            <CategoryItem 
                icon ={dumbell} 
                title ={'Strength Training'} 
                des = {'In this program, you are trained to improve your strength through many exercises.'} 
            />
             <CategoryItem 
                icon ={flame} 
                title ={'Strength Training'} 
                des = {'In this program, you are trained to improve your strength through many exercises.'} 
            />
            <CategoryItem 
                icon ={running} 
                title ={'Strength Training'} 
                des = {'In this program, you are trained to improve your strength through many exercises.'} 
            />
            <CategoryItem 
            icon ={heart} 
            title ={'Strength Training'} 
            des = {'In this program, you are trained to improve your strength through many exercises.'} 
        />
        </div>
    </div> );
}

export default Program;