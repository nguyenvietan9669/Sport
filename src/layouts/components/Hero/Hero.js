import classnames from 'classnames/bind'
import Header from '../header';
import styles from './Hero.module.scss'
import heroImg from "../../../assets/hero_image.png"
import heart from "../../../assets/heart.png"
import calo from "../../../assets/calories.png"
import { motion } from "framer-motion"


const cx = classnames.bind(styles)

function Hero() {

    const transition = {type:'tween'}
    return ( <div className={cx('wrapper')}>
        <div className={cx('blur','hero-blur')}></div>
    <div className={cx('left')}>
        <Header/>
        <div className={cx('best-ad')}>
            <motion.div 
                className={cx('bar')}
                initial = {{left:'225px'}}
                whileInView = {{left:'8px'}}
                transition ={{...transition,duration : 3}}
            >
            </motion.div>
            <span className={cx('ad-content')}>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        <div className = {cx('hero-text')}>
            <span className={cx("stroke-text","text")}>SHAPE</span>
            <span className={cx("text")}>YOUR IDEAL BODY</span>
        </div>
        <div className={cx('des')}>In here we will help you to shape and build
         your ideal body and live up your life to fullest
         </div>
        <div className={cx('figures')}>
            <div className={cx('fogure-item')}>
                <div className={cx('figure-number')}>+ 140</div>
                <div className={cx('figure-text')}>EXPERT COACHES</div>
            </div>
            <div className={cx('fogure-item')}>
                <div className={cx('figure-number')}>+ 978</div>
                <div className={cx('figure-text')}>MEMBERS JOINED</div>
            </div>
            <div className={cx('fogure-item')}>
                <div className={cx('figure-number')}>+ 50</div>
                <div className={cx('figure-text')}>FITNESS PROGRAMS</div>
            </div>
        </div>
        <div className={cx('buttons')}>
            <div className={cx('btn-get')}>Get Started</div>
            <div className={cx('btn-learn')}>Learn More</div>
        </div>
    </div>
    <div className={cx('right')}>
        <div className={cx('btn-join')}>
            Join Now
        </div>
        <div className={cx('heart-rate')}>
            <img className={cx('heart-img')} src={heart}/>
            <span className={cx('heart-title')}>Heart Rate</span>
            <span className={cx('heart-number')}>116 pbm</span>
        </div>
        <div className={cx('hero')}>
            <img 
                className={cx('hero-img')} 
                src={heroImg}
            />
        </div>
        <div className={cx('calo')}>
            <div className={cx('calo-chart')}>
                <img className={cx('img-chart')} src={calo}/>
            </div>
            <div className={cx('calo-content')}>
                <span className={cx('calo-title')}>Calories burned</span>
                <span className={cx('calo-des')}>220 kcal</span>
            </div>
        </div>
    </div>
    </div> );
}

export default Hero;