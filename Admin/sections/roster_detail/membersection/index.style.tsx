import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const MemberSectionWrapper = styled.div`
  max-width: 100%;
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
    background-color: ${themeGet('colors.primary')};
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
  background-color: ${themeGet('colors.blue')};
  background-image: -webkit-linear-gradient(
    top,
    #94e060,
    ${themeGet('colors.blue')} 50%
  );
  border: 0.0625em solid ${themeGet('colors.blue')};
  cursor: pointer;
  &:hover {
    background-color: #6eb5f9;
    background-image: -webkit-linear-gradient(top, #6eb5f9, #2b89cb 50%);
    border: 0.0625em solid ${themeGet('colors.blue')};
  }
  transition-duration: 0.5s;
  @media screen and (max-width: 432px) {
    padding: 0.3rem 1rem;
  }
`

export const TableContent = styled.div`
  overflow: auto;
`
