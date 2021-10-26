import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
export const ContactWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
`

export const ContactHeader = styled.span`
  font-size: 35px;
  font-weight: 500;
`

export const ContactContent = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  background: ${themeGet('colors.green')};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
`
export const ContactMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`
export const ContactLabel = styled.span`
  color: ${themeGet('colors.orange')};
  font-size: 18px;
  padding-bottom: 5px;
  font-weight: 500;
`

export const MessageBox = styled.textarea`
  height: 200px;
`
export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 0.3rem;
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
  background-color: #1373b4;
  background-image: -webkit-linear-gradient(top, #5ca2e6, #1373b4 50%);
  border: 0.0625em solid #1373b4;
  cursor: pointer;
  &:hover {
    background-color: #6eb5f9;
    background-image: -webkit-linear-gradient(top, #6eb5f9, #2b89cb 50%);
    border: 0.0625em solid #1373b4;
  }
`
