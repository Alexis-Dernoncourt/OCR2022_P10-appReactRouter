import styled from 'styled-components'
import { colors, screen } from '../../utils/styleConfig'

export const FooterContainer = styled.footer`
  padding: 2rem 4rem;
  height: 20.9rem;
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.71rem;
  font-weight: 500;
  text-align: center;
  color: ${colors.white};
  max-width: 10rem;
  margin-top: 1rem;

  @media(min-width: ${screen.lg}px) {
    line-height: 3.42rem;
    max-width: unset;
    margin-top: 3rem;
  }
`
