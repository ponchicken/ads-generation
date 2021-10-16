import styled, { keyframes, css } from 'styled-components'

const blink = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const Spinner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  position: relative;
  width: 40px;
  height: 40px;

  ${({ size }) => size === 's' && css`
    width: 10px;
    height: 0;
  `}

  div {
    border: 8px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ${blink} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`
