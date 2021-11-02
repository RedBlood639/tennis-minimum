import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const Label = styled.span`
  font-weight: 500;
  margin-right: 30px;
`
export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-duration: 0.5s;
  @media screen and (max-width: 514px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Input = styled.input`
  height: 30px;
  font-size: 18px;
  border: 1px solid #495057;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  transition-duration: 0.5s;
  @media screen and (max-width: 514px) {
    width: 100%;
  }
`

export const FormWrapper = styled.div`
  justify-content: center;
  margin-bottom: 50px;
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  background-color: #dfdfdf;
`

export const FormContent = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 10px;
  transition-duration: 0.5s;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`
export const SaveButton = styled.button`
  color: ${themeGet('colors.white')};
  width: 100%;
  margin-bottom: 5px;
  border-radius: 0.3rem;
  line-height: 2;
  cursor: pointer;
  background-color: #298113;
  background-image: -webkit-linear-gradient(top, #cef393, #298113 50%);
  border: 0.0625em solid #298113;
`
export const CancelButton = styled.button`
  color: ${themeGet('colors.white')};
  width: 100%;
  margin-bottom: 5px;
  border-radius: 0.3rem;
  line-height: 2;
  cursor: pointer;
  background-color: #c40404;
  background-image: -webkit-linear-gradient(top, #ffa4a4, #c40404 50%);
  border: 0.0625em solid #c40404;
`
