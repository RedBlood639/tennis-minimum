import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`

export const CardGroup = styled.div`
  padding: 0 20px 30px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  transition-duration: 0.5s;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`
