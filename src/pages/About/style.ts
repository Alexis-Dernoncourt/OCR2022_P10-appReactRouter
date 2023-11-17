import styled from 'styled-components'
import { colors, screen } from '../../utils/styleConfig'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.primaryText};
`

export const ImageHeaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 11.1rem;
  background-image: url(${process.env.PUBLIC_URL + "/images/about-header-img-sm.jpg"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  
  @media(min-width: ${screen.lg}px) {
    width: 100%;
    background-image: url(${process.env.PUBLIC_URL + "/images/about-header-img-xl.jpg"});
    border-radius: 2.5rem;
    height: 22.3rem;
  }
`
export const AboutContainer = styled.section`
  padding: 4rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
export const DropdownButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  border: 0;
  background-color: ${colors.primary};
`
export const DropdownItem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 0;
`
