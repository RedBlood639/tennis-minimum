import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'
import { Modal } from 'react-responsive-modal'

export const TeamRosterWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 100px;
  width: 100%;
  padding: 100px;
`

export const TeamRosterGroup = styled.div`
  width: 50%;
`

export const MemberContent = styled.div`
  max-height: calc(100vh - 250px);
  overflow: auto;
  border-radius: 0.3rem;
  border: 1px solid rgba(0, 0, 0, 0.35);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const MembersGroup = styled.div`
  width: 50%;
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
  margin-bottom: 5px;
  width: 500px;
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
