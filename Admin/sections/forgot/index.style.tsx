import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const ForgotWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  @media screen and (max-width: 503px) {
    width: 80%;
  }
  @media screen and (max-width: 365px) {
    width: 95%;
  }
`
export const ForgotHeaderLabel = styled.span`
  font-size: 30px;
  font-weight: 450;
  margin: 80px 0 30px 0;
`
export const ForgotButton = styled.button`
  margin: 1.5rem;
  color: ${themeGet('colors.white')};
  padding: 0.3rem 4rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  line-height: 1.5;
  background-color: ${themeGet('colors.blue')};
  background-image: -webkit-linear-gradient(
    top,
    #94e060,
    ${themeGet('colors.blue')} 50%
  );
  border: 0.0625em solid ${themeGet('colors.blue')};
  cursor: pointer;
  &:hover {
    background-color: #6eb5f9;
    background-image: -webkit-linear-gradient(top, #6eb5f9, #2b89cb 50%);
    border: 0.0625em solid ${themeGet('colors.blue')};
  }
`
