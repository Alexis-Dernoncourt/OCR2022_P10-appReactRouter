import styled from 'styled-components'
import { colors, screen } from '../../utils/styleConfig'

export const TagItem = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 11.5rem;
  padding: 0;
  text-align: center;
  background-color: ${colors.primary};
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 500;
  color: ${colors.white};
  border-radius: 1rem;
  line-height: 1.8rem;
  height: 1.8rem;
  
  @media(min-width: ${screen.lg}px){
    line-height: 2.5rem;
    height: 2.5rem;
    padding: 0 2rem;
  }
`
