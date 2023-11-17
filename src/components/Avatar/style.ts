import styled from 'styled-components'
import { colors, screen } from '../../utils/styleConfig'

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  
  @media(min-width: ${screen.lg}px){
  }
`
export const AvatarName = styled.p`
  color: ${colors.primary};
  max-width: 9.3rem;
`
export const AvatarPic = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  color: ${colors.primary};
`
