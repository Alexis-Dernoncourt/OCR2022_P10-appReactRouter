import styled from 'styled-components'
import { colors, screen } from '../../utils/styleConfig'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.primaryText};
`

export const HomeContainer = styled.main`
  padding: 2rem 1.5rem;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  
  @media(min-width: ${screen.sm}px) {
    padding: 3rem 2rem;
    
  }
  @media(min-width: ${screen.xl}px) {
    padding: 0 10rem 5rem;
  }
`
