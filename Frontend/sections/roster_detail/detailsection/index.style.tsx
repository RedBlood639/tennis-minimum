import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  grid-template-columns: 0.5fr 2.5fr 0.2fr 0.2fr 0.5fr 0fr;
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
