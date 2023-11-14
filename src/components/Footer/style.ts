import styled from 'styled-components'
import { colors } from '../../utils/colors'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.primaryText};
`

export const FooterContainer = styled.section`
  padding: 2rem 4rem;
  background: ${colors.lightGreyAccent};
  display: flex;
  justify-content: center;
  align-items: center;
`
