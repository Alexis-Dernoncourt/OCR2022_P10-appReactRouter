import React, { useState } from 'react'
import "./Slider.scss"
import { LogementProps } from '../../types'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

type SliderProps = {
  logement: LogementProps
}

const Slider = ({ logement }: SliderProps) => {
  const images = logement?.pictures
  const totalSlides = logement?.pictures?.length
  const [index, setIndex] = useState(0)

  const handleArrow = (direction: string) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : totalSlides - 1)
    }
    if (direction === 'r') {
      setIndex(index !== totalSlides - 1 ? index + 1 : 0)
    }
  }

  return (
    <div className='slider-container'>
      <div className={`arrow-container ${totalSlides === 1 && 'hide'}`}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <MdArrowBackIosNew style={{ width: '7em', height: '7em' }} />
      </div>
      <div className='slider-wrapper' style={{ transform: `translateX(-${100 / totalSlides * index}%)`, width: `${100 * totalSlides}%` }}>
        {images &&
          images.map((obj: string, i: number) => (
            <div className='img-container' key={i}>
              <img className='img' src={obj} alt='' loading='lazy' />
            </div>

          ))
        }
      </div>
      <p className={`slider-text ${totalSlides === 1 && 'hide'}`}>{`${index + 1} / ${totalSlides}`}</p>
      <div className={`arrow-container ${totalSlides === 1 && 'hide'}`}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <MdArrowForwardIos style={{ width: '7em', height: '7em' }} />
      </div>
    </div>
  )
}

export default Slider
