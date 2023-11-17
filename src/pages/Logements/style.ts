import styled from 'styled-components'
import { colors, screen } from '../../utils/styleConfig'

export const LogementsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4em;
`
export const DropdownsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  @media(min-width: ${screen.xl}px) {
    flex-direction: row;
  }
`
export const TagContainer = styled.div`
  display:flex;
  gap: 1rem;
  margin: 1.5rem 0;
  @media(min-width: ${screen.xl}px) {
    gap: 2rem;
  }
`
export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 500;
  text-align: left;
  color: ${colors.primaryText};
  margin-bottom: 1rem;
  `
export const Location = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  text-align: left;
  color: ${colors.primaryText};
  /* margin: 1rem 0; */
`
