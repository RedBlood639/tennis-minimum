import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const TeamRosterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const TeamRosterGroup = styled.div`
  width: 70%;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`

export const TeamRosterContent = styled.div`
  max-height: calc(100vh - 250px);
  overflow: auto;
  border-radius: 0.3rem;
  border: 1px solid rgba(0, 0, 0, 0.35);
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`

export const MemberLabel = styled.span`
  font-size: 25px;
  color: ${themeGet('colors.green')};
  font-weight: 500;
`

export const TeamRosterButton = styled.button`
  color: ${themeGet('colors.white')};
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

export const RosterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${themeGet('colors.green')};
`

// modal
export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
`
export const ModalLabel = styled.span`
  font-size: 18px;
  font-weight: 450;
`
export const ModalInput = styled.input`
  height: 35px;
  border-radius: 0.3rem;
  margin-bottom: 5px;
  width: 500px;
  border: 1px solid #8d8f91;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  @media screen and (max-width: 600px) {
    width: 350px;
  }
  @media screen and (max-width: 425px) {
    width: 300px;
  }
  @media screen and (max-width: 375px) {
    width: 250px;
  }
`

export const ModalButton = styled.button`
  color: ${themeGet('colors.white')};
  border-radius: 0.3rem;
  line-height: 1.5;
  width: 100%;
  padding: 0.4rem 1rem;
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
