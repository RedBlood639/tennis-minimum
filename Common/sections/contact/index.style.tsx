import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const ContactWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  background-color: floralwhite;
  transition-duration: 0.5s;
  @media screen and (max-width: 768px) {
    width: 85%;
  }
`

export const ContactHeader = styled.span`
  font-size: 35px;
  margin-top: 50px;
  font-weight: 500;
  transition-duration: 0.5s;
  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
`

export const ContactContent = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  background: ${themeGet('colors.primary')};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
`
export const ContactMain = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
  transition-duration: 0.5s;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }
`
export const ContactLabel = styled.span`
  color: ${themeGet('colors.orange')};
  font-size: 18px;
  padding-bottom: 5px;
  font-weight: 500;
`

export const MessageBox = styled.textarea`
  height: 200px;
  font-size: 16px;
  border: 1px solid #495057;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`
export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 18px;
  border-radius: 0.3rem;
  border: 1px solid #495057;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`
export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  margin-bottom: 10px;
`
export const ContactButton = styled.button`
  padding: 0.3rem;
  border-radius: 0.3rem;
  width: 100%;
  color: ${themeGet('colors.white')};
  font-size: 1rem;
  border-radius: 0.3rem;
  line-height: 1.5;
  background-color: ${themeGet('colors.blue')};
  background-image: -webkit-linear-gradient(
    top,
    #5ca2e6,
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
