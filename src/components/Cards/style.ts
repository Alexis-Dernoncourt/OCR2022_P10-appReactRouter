import styled, { keyframes } from "styled-components"
import { colors, screen, typos } from '../../utils/styleConfig'

const skeletonAnimation = keyframes`
  0% { 
    opacity: 0;
    transform:scaleX(0);
  }
  10% { 
    opacity: 0.7;
  }
  90% {
    opacity: 0;
  }
  100% { 
    transform:scaleX(1);
    opacity: 0;
  }
`

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
`
export const CardsContainer = styled.ul`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 6rem;
  row-gap: 5rem;
  width: 100%;
  padding: auto;
  list-style: none;
  background-color: ${colors.white};
  
  @media(min-width: ${screen.lg}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: ${screen.xl}px) {
    border-radius: 2.5rem;
    background-color: ${colors.lightGrey};
    padding: 5.6rem 6.5%;
  }
  @media(min-width: ${screen.xxl}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const CardItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  height: 25.5rem;
  width: 100%;
  max-width: 33.5rem;
  
  @media(min-width: ${screen.md}px) {
    height: 34rem;
  }
`
export const CardTextContainer = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  padding: 1.5rem;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0.65) 20%, rgba(0,0,0,0) 100%);
  display: flex;
  align-items: flex-end;
`
export const CardText = styled.p`
  font-size: ${typos.xs + typos.unit};
  line-height: 2.5rem;
  font-weight: 500;
  color: #fff;
`
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const SkeletonCardItem = styled.div`
  position: relative;
  display: flex;
  background-color: #d2d2d2;
  border-radius: 1rem;
  padding: 1.5rem;
  height: 25.5rem;
  width: 100%;
  max-width: 33.5rem;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${colors.lightGreyAccent};
    animation-name: ${skeletonAnimation};
    animation-duration: 1s;
    
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    transform-origin: left;
  }

  @media(min-width: ${screen.md}px) {
    height: 34rem;
  }
`
export const SkeletonCardTextContainer = styled.div`
  position: relative;
  width: 40rem;
  height: 5rem;
  align-self: flex-end;
  bottom: 0;
  background-color: transparent;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #737272;
    animation-name: ${skeletonAnimation};
    animation-duration: 1s;
    animation-delay: 0.1s;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    transform-origin: left;
    z-index: 100;
  }
`
