import styled from 'styled-components'
import { colors } from '../../utils/styleConfig'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${colors.primaryText};
`

export const LogementsContainer = styled.section`
  padding: 4em;
  background: ${colors.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
`
