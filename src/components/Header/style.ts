import styled from "styled-components"
import { colors, screen, typos } from "../../utils/styleConfig"
import { Link } from "react-router-dom"

export const HeaderContainer = styled.header`
	height: 9.38rem;
	padding: 0 3rem;
	background: ${colors.white};
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 1000;
  @media(min-width: ${screen.lg}px) {
    height: 16.3rem;
  }
`
export const LogoContainer = styled.div<{ $isFooter?: boolean }>`  
  > svg {
    width: ${({ $isFooter }) => $isFooter ? '12.2rem' : '14.5rem'};
    height: ${({ $isFooter }) => $isFooter ? '3.94rem' : '4.68rem'};;
    fill: ${({ $isFooter }) => $isFooter ? colors.white : colors.primary};

    @media(min-width: ${screen.md}px) {
      width: ${({ $isFooter }) => $isFooter ? '12.2rem' : '21.03rem'};
      height: ${({ $isFooter }) => $isFooter ? '3.94rem' : '6.8rem'};;
    }
  }
  `
export const NavContainer = styled.nav`
  display: flex;
  align-content: center;
  justify-content: space-between;
  gap: 0.7rem;

  @media(min-width: ${screen.sm}px) {
    gap: 1.5rem;
  }
  @media(min-width: ${screen.md}px) {
    gap: 2.5rem;
  }
  @media(min-width: ${screen.lg}px) {
    gap: 3.7rem;
  }
  @media(min-width: ${screen.xl}px) {
    gap: 5rem;
  }
`
export const MenuLink = styled(Link)`
  font-size: ${typos.xxs + typos.unit};
  font-weight: 500;
  line-height: 1.7rem;
  color: ${colors.primaryText};
  text-decoration: none;
  text-transform: uppercase;
  
  &:hover {
    text-decoration: underline;
  }
    
  @media(min-width: ${screen.md}px) {
    font-size: ${typos.sm + typos.unit};
    line-height: 3.42rem;
    text-transform: capitalize;
  }
`
