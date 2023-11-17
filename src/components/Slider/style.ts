import styled from 'styled-components'
import { colors, screen } from '../../utils/styleConfig'

export const Container = styled.div`
  position: relative;
  height: 25.5rem;
  overflow: hidden;
  border-radius: 1rem;
  margin-bottom: 4rem;

  @media(min-width: ${screen.xl}px) {
    height: 41.5rem;
  }
`
export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 5%;
  height: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
  color: ${colors.white};
  cursor: pointer;
  z-index: 2;
  transition: var(--transition);
  &:hover {
      background-color: rgba(0, 0, 0, 0.25);
  }
`
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.9s ease-out;
`
export const ImgContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const SliderText = styled.div``
