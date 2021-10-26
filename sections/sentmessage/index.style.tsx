import styled from 'styled-components'

export const SentWrapper = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 150px 0;
  display: flex;
  gap: 10px;
  flex-direction: column;
`

export const SentLabel = styled.span`
  font-weight: 500;
  font-size: 45px;

  @media screen and (max-width: 425px) {
    font-size: 38px;
  }
  @media screen and (max-width: 320px) {
    font-size: 30px;
  }
`
export const SentSubLabel = styled.span`
  font-weight: 400;
  font-size: 18px;
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`
