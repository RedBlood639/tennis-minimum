import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`
export const DetailForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const DetailLabel = styled.span`
  font-weight: 500;
`
export const DetailInput = styled.input`
  border-radius: 5%;
  font-size: 18px;
  height: 40px;
  border: 1px solid #495057;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`
export const DetailButton = styled.button`
  margin-right: 10px;
  color: ${themeGet('colors.white')};
  border-radius: 0.3rem;
  line-height: 2.5;
  cursor: pointer;
`
export const DetailArea = styled.textarea`
  height: 100px;
  font-size: 16px;
  border: 1px solid #495057;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`

export const SaveButton = styled(DetailButton)`
  margin-top: 20px;
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
export const DeleteButton = styled(DetailButton)`
  background-color: #c7170a;
  background-image: -webkit-linear-gradient(top, #ecb696, #c7170a 50%);
  border: 0.0625em solid #c7170a;
  &:hover {
    background-color: #ecb696;
    background-image: -webkit-linear-gradient(top, #ecb696, #c7170a 50%);
    border: 0.0625em solid #c7170a;
  }
`

export const DetailContent = styled.div`
  max-height: 350px;
  overflow: auto;
  border-bottom: 1px solid black;
  border-radius: 0.3rem;
`

export const MemberLabel = styled.span`
  font-weight: 470;
  line-break: anywhere;
`
export const MemeberWrapper = styled.div`
  background-color: #ecebeb;
  border: 1px solid gray;
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 0.3rem;
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 0.2fr 0.5fr 0.1fr 0fr;
  align-items: center;
`
export const MemberState = styled.select`
  border-radius: 5%;
  height: 37px;
  border: transparent;
  margin: 0 10px;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const StyledLeagueCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 0.5rem;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`
export const LeagueForm = styled.div`
  padding-bottom: 5px;
`
export const LeagueLabel = styled.span`
  line-break: anywhere;
`
export const LeagueInput = styled.input``
const LeagueButton = styled.button`
  padding: 0.5rem 0.7rem;
  border-radius: 0.3rem;
  cursor: pointer;
`

export const AddButton = styled(LeagueButton)`
  background: ${themeGet('colors.green')};
  border: 1px solid ${themeGet('colors.white')};
  color: ${themeGet('colors.white')};
  &:hover {
    background: ${themeGet('colors.white')};
    color: ${themeGet('colors.black')};
  }
`

export const LeagueHeaderLabel = styled.span`
  width: 100%;
  font-size: 25px;
`

export const LeagueHeader = styled.div`
  color: ${themeGet('colors.green')};
  padding-bottom: 5px;
  align-items: center;
  display: flex;
  border-bottom: 1px solid ${themeGet('colors.green')};
`

export const Content = styled.div``

export const ModalHeader = styled.span`
  font-size: 23px;
  font-weight: 500;
  padding-bottom: 5px;
  margin-bottom: 5px;
  color: ${themeGet('colors.green')};
  border-bottom: 1px solid ${themeGet('colors.green')};
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ModalForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`
