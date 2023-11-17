import styled, { keyframes } from 'styled-components'
import { colors, typos, screen } from '../../utils/styleConfig'

const rotateAnimation = keyframes`
 0% { transform:rotate(0deg) }
 60% { transform:rotate(-180deg) }
 100% { transform:rotate(-180deg) }
`
const rotateAnimationReverse = keyframes`
 0% { transform:rotate(-180deg) }
 60% { transform:rotate(0deg) }
 100% { transform:rotate(0deg) }
`

export const DropdownContainer = styled.div`
  width: 100%;
  min-height: 5rem;
`
export const DropdownUL = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  list-style: none;
  background-color: ${colors.lightGrey};
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 2rem;
`
export const DropdownItem = styled.li`
  position: relative;
  width: 100%;
  min-height: 2rem;
  padding: 0;
  display: flex;
  align-items: center;
  border: none;
  justify-content: flex-start;
  color: ${colors.primary};
  font-size: ${typos.xs + typos.unit};
  line-height: 2.56rem;

  &:nth-child(1) {
    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 0;
      right: 0;
      width: 100%;
      height: 10px;
      background-color: ${colors.lightGrey};
      z-index: -1;
    }
  }
`
export const DropdownButton = styled.button<{ $hoverStyle?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  width: 100%;
  min-height: 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: ${typos.xs + typos.unit} !important;
  
  & > .open {
    animation-name: ${rotateAnimation};
    animation-direction: normal;
    animation-timing-function: cubic-bezier(0.23, 0.23, 0.21, -0.75);
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  }
  & > .closed {
    animation-name: ${rotateAnimationReverse};
    animation-direction: normal;
    animation-timing-function: ease-in-out;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    // #ff6060b8
  }

  &:hover {
    background-color: ${({ $hoverStyle }) => $hoverStyle ? colors.primary + 'b8' : ''};
  }
`
export const DropdownButtonText = styled.span`
  font-weight: 500;
  font-size: ${typos.xs + typos.unit};
  line-height: 2.56rem;
  
  @media(min-width: ${screen.xl}px) {
    font-size: ${typos.sm + typos.unit} !important;
    line-height: 3.42rem;
  }
`
