import styled from "styled-components"
import { colors, screen, typos } from '../../utils/styleConfig'

export const CardsContainer = styled.ul`
  overflow: hidden;
  border-radius: 2.5rem;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 6rem;
  row-gap: 5rem;
  width: 100%;
  padding: 0;
  list-style: none;
  background-color: ${colors.white};
  
  @media(min-width: ${screen.lg}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: ${screen.xl}px) {
    background-color: ${colors.lightGrey};
    padding: 5.6rem 5rem;
  }
  @media(min-width: ${screen.xxl}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const CardItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  height: 25rem;

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
