import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
 0% { transform:rotate(0deg) }
 100% { transform:rotate(360deg) }
`
export const LoaderContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  min-height: 50vh;
  width: 100%;

  >.loader {
    animation-name: ${loadingAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`
