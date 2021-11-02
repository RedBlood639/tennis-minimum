import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const TeamRosterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const TeamRosterGroup = styled.div`
  width: 70%;
  transition-duration: 0.5s;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`

export const TeamRosterContent = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`

export const MemberLabel = styled.span`
  font-size: 25px;
  color: ${themeGet('colors.primary')};
  font-weight: 500;
`

export const TeamRosterButton = styled.button`
  color: ${themeGet('colors.white')};
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

export const RosterHeader = styled.div`
  /* position: fixed; */
  /* /* width: 100%; */
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin-top: 100px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${themeGet('colors.primary')};
`
export const ModalHeader = styled.div`
  /* position: fixed; */
  /* /* width: 100%; */
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${themeGet('colors.primary')};
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
  font-size: 18px;
  margin-bottom: 5px;
  width: 500px;
  border: 1px solid #8d8f91;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  transition-duration: 0.5s;
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
