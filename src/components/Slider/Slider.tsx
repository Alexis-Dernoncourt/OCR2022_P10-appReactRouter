import React, { useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
// import { imageBlurUrl } from '../../utils/styleConfig'
// import Img1 from '../../'
// import Img2 from '../../images/slider/02.jpg'
// import Img3 from '../../images/slider/03.jpg'
import {
  Container,
  ArrowContainer,
  Wrapper,
  ImgContainer,
  Img,
} from './style'

const Slider = (props: any) => {
  const images = props?.logement?.pictures
  const totalSlides = props.logement?.pictures?.length
  console.log("Slider props:", images)

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
    <Container>
      <ArrowContainer
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <MdArrowBackIosNew style={{ width: '7em', height: '7em' }} />
      </ArrowContainer>
      <Wrapper style={{ transform: `translateX(-${100 / totalSlides * index}%)`, width: `${100 * totalSlides}%` }}>
        {images &&
          images.map((obj: any, i: number) => (
            <ImgContainer key={i}>
              <Img src={obj} loading='lazy' />
              {/* <p style={{ zIndex: 500, position: "absolute", bottom: 0, left: "42.5vw", color: "#fff", marginBottom: "4rem" }}>{`${index + 1} / ${totalSlides}`}</p> */}
            </ImgContainer>

          ))
        }
      </Wrapper>
      <ArrowContainer
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <MdArrowForwardIos style={{ width: '7em', height: '7em' }} />
      </ArrowContainer>
    </Container>
  )
}

export default Slider
