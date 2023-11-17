import styled from 'styled-components'
import { colors, screen } from '../../utils/styleConfig'
import { Link } from 'react-router-dom'

export const ErrorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 5rem 5.7rem;
  text-align: center;
  
  @media(min-width: ${screen.lg}px) {
    padding: 13rem 5.7rem;
  }
`
export const Title = styled.h1`
  color: ${colors.primary};
  font-weight: 700;
  line-height: 9.3rem;
  font-size: 9.3rem;
  
  @media(min-width: ${screen.lg}px) {
    line-height: 28.8rem;
    font-size: 28.8rem;
    
  }
`
export const Text = styled.p`
  color: ${colors.primary};
`
export const StyledLink = styled(Link)`
  color: ${colors.primary};
`
