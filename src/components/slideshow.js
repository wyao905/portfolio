import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

function Slideshow(props) {
    const length = props.picArr.length

    const nextSlide = () => {
        props.setCurrent(props.current === length - 1 ? 0 : props.current + 1)
    }

    const prevSlide = () => {
        props.setCurrent(props.current === 0 ? length - 1 : props.current - 1)
    }

    return <div className='slider-window'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        {props.picArr.map((slide, index) => {
            return <div className={index === props.current ? 'slide-active' : 'slide'} key={index}>
                {index === props.current && (<img className='picture' src={slide.src} alt={slide.alt} />)}
            </div>
        })}
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    </div>
}

export default Slideshow