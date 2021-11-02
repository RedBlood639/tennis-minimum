import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const CardSectionWrapper = styled.div``

export const CardDescription = styled.div`
  padding: 0 20px;
  text-align: center;
`

export const CardImage = styled.div`
  padding-bottom: 20px;
`

export const CardLavel = styled.span`
  font-size: 18px;
  transition-duration: 0.5s;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`
