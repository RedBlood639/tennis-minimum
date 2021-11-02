import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const LineupWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`
export const LineupHeader = styled.span`
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`
export const LineupContent = styled.div`
  padding: 1rem;
  border-top: 1px solid ${themeGet('colors.primary')};
`
export const LineupHeaderLabel = styled.div`
  color: ${themeGet('colors.primary')};
  font-size: 25px;
  font-weight: 500;
`

export const LineupHeaderButton = styled.button`
  color: ${themeGet('colors.white')};
  padding: 0 1rem;
  border-radius: 0.3rem;
  background-color: ${themeGet('colors.blue')};
  background-image: -webkit-linear-gradient(
    top,
    #94e060,
    ${themeGet('colors.blue')} 50%
  );
  line-height: 2;
  border: 0.0625em solid ${themeGet('colors.blue')};
  cursor: pointer;
  &:hover {
    background-color: #6eb5f9;
    background-image: -webkit-linear-gradient(top, #6eb5f9, #2b89cb 50%);
    border: 0.0625em solid ${themeGet('colors.blue')};
  }
`

export const ModalLabel = styled.span`
  font-size: 19px;
`
export const ModalInput = styled.input`
  border-radius: 5%;
  height: 35px;
  border: 1px solid #495057;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`
export const ModalForm = styled.div`
  display: grid;
  gap: 5px;
  width: 700px;
  transition-duration: 0.5s;
  @media screen and (max-width: 818px) {
    width: 500px;
  }
  @media screen and (max-width: 616px) {
    width: 300px;
  }
  @media screen and (max-width: 414px) {
    width: 200px;
  }
`
