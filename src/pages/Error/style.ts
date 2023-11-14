import styled from 'styled-components'
import { colors } from '../../utils/styleConfig'
import { Link } from 'react-router-dom'

export const Title = styled.h1`
  color: ${colors.primary};
`
export const Text = styled.p`
  color: ${colors.primary};
`
export const StyledLink = styled(Link)`
  color: ${colors.primary};
`
