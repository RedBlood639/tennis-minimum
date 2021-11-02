import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 503px) {
    width: 80%;
  }
  @media screen and (max-width: 365px) {
    width: 92%;
  }
`

export const SignUpHeaderLabel = styled.span`
  font-size: 30px;
  font-weight: 450;
  margin: 80px 0 30px 0;
`

export const SignUpButton = styled.button`
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
