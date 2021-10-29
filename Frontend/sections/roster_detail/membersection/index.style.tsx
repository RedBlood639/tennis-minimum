import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const MemberSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledTable = styled.table`
  overflow: scroll;
  caption-side: top;
  min-width: 100%;
  border: 1px solid #666666;
  border-collapse: collapse;
  caption-side: bottom;
  td {
    padding: 10px 20px;
  }
  tbody tr {
    :nth-of-type(odd) {
      background-color: #acf789;
    }
    :nth-of-type(even) {
      background-color: #d5f191;
    }
    :hover {
      background-color: #ecf8d3;
    }
    cursor: pointer;
  }
  thead > tr {
    background-color: ${themeGet('colors.green')};
    color: white;
  }
`
export const SaveButton = styled.button`
  margin: 1.5rem;
  color: ${themeGet('colors.white')};
  padding: 0.3rem 4rem;
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
