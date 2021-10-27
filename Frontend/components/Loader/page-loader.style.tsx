import styled, { keyframes } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`
export const LoaderBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${themeGet('colors.white')};
  opacity: 0.75;
  z-index: 9999;
`

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 8px solid ${themeGet('colors.white', '#ffffff')};
  border-top: 12px solid
    ${(props) =>
      props.color
        ? props.color
        : themeGet('colors.primary.regular', '#009e7f')};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`
