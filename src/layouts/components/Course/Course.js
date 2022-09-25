import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeartCirclePlus,faCrown,faDumbbell} from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames/bind'
import styles from './Course.module.scss'
import CourseItem from '../../../components/CourseItem';
import iconTick from '../../../assets/whiteTick.png'

const cx = classnames.bind(styles)

function Course() {

    const list1 = [
        {
            icon:iconTick,
            title:'2 hours of excercises'
        },
        {
            icon:iconTick,
            title:'Free consultaion to coaches'
        },
        {
            icon:iconTick,
            title:'Access to The Community'
        }
    ]

    const list2 = [
        {
            icon:iconTick,
            title:'5 hour of excercises'
        },
        {
            icon:iconTick,
            title: 'Free consultaion of Coaches'
        },
        {
            icon:iconTick,
            title: 'Accessto minibar'
        }       
    ]

    const list3 = [
        {
            icon:iconTick,
            title:'8 hours of excercises'
        },
        {
            icon:iconTick,
            title: 'Consultation of Private Coach'
        },
        {
            icon:iconTick,
            title: 'Free Fitness Merchandises'
        }       
    ]

    return ( <div className={cx('wrapper')}>
        <div className={cx('header')}>
            <span className={cx('text','stroke-text')}>READY TO START</span>
            <span className={cx('text')}>OUR JOURNEY</span>
            <span className={cx('text','stroke-text')}>NOW WITHUS</span>
        </div>
        <div className={cx('blur','course-blur-left')}></div>
        <div className={cx('blur','course-blur-right')}></div>
        <div className={cx('content')}>
            <CourseItem 
            icon = {<FontAwesomeIcon className={cx('icon')} icon = {faCrown}/>}
            title ={'BASIC PLAN'}
            cost ={'25'}
            listDetail = {list1}
            />
            <CourseItem 
            icon = {<FontAwesomeIcon className={cx('icon')} icon = {faHeartCirclePlus}/>}
            title ={'PREMIUM PLAN'}
            cost ={'30'}
            listDetail = {list1}
            active ={true}
            />
            <CourseItem 
            icon = {<FontAwesomeIcon className={cx('icon')} icon = {faDumbbell}/>}
            title ={'PRO PLAN'}
            cost ={'45'}
            listDetail = {list1}
            />
        </div>
    </div> );
}

export default Course;