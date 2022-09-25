import classnames from 'classnames/bind'
import { useState } from 'react';
import {motion} from 'framer-motion'
import styles from './Testimonial.module.scss'
import {testimonialsData} from '../../../data/testimonialsData'
import leftArrow from '../../../assets/leftArrow.png'
import rightArrow from '../../../assets/rightArrow.png'

const cx = classnames.bind(styles)

function Testimonial() {

    const [index,setIndex] = useState(0)
    const lenght = testimonialsData.length

    const handleArrowLeft = () => {
        index === 0 ? setIndex(lenght-1) : setIndex(prev => prev - 1)
    }

    const handleArrowRight = () => {
       index === lenght-1 ? setIndex(0) : setIndex(prev => prev + 1)
    }

    return ( <div className={cx('wrapper')}>
        <div className={cx('left')}>
            <div className={cx('title')}>TESTIMONIALS</div>
            <div className= {cx('text','stroke-text')} >WHAT THEY</div>
            <div className= {cx('text')} >SAY ABOUT US</div>
                <motion.div 
                    key={index}
                    initial = {{x:-100,opacity:0}}
                    animate ={{x:0,opacity:1}}
                    exit = {{opacity:0}}
                    transition ={{type:'spring',duration:2}}
                    className={cx('des')}
                >
                    {testimonialsData[index].review}
                </motion.div>
            <div className={cx('authur')} >
                <span className={cx('name')}>{testimonialsData[index].name} - </span>
                <span className={cx('status')}>{testimonialsData[index].status}</span>
            </div>
        </div>
        <div className={cx('right')}>
            <motion.img 
                key={index}
                initial = {{x:100,opacity:0}}
                animate ={{x:0,opacity:1}}
                exit = {{opacity:0,x:-100}}
                transition ={{type:'spring',duration:2}}
                src = {testimonialsData[index].image} 
                className ={cx('image')}
            />
            <motion.div 
                initial = {{x:-100,opacity:0}}
                whileInView = {{x:0,opacity:1}}
                transition = {{type:'spring',duration:2}}
                className={cx('frame')}
            ></motion.div>
            <motion.div 
                initial = {{x:100,opacity:0}}
                whileInView = {{x:0,opacity:1}}
                transition = {{type:'spring',duration:2}}
                className={cx('background')}
            ></motion.div>
            <div className={cx('arrow')}>
                <img 
                    src ={leftArrow}  
                    className={cx('arrowLeft')}
                    onClick = {handleArrowLeft}
                />
                <img 
                    src = {rightArrow} 
                    className={cx('arrowRight')}
                    onClick = {handleArrowRight}

                />
            </div >
        </div>
    </div> );
}

export default Testimonial;