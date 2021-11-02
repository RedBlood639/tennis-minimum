import styled from 'styled-components'

export const StyledTable = styled.table`
  caption-side: top;
  border: 1px solid #efefef;
  border-collapse: collapse;
  caption-side: bottom;
  td {
    padding: 5px 20px;
    line-break: anywhere;
  }
  tbody tr {
    :nth-of-type(odd) {
      background-color: #7acf53;
    }
    :nth-of-type(even) {
      background-color: #c0e763;
    }
    :hover {
      background-color: #ecf8d3;
    }
    cursor: pointer;
  }
  thead > tr {
    background-color: #182dec;
    color: white;
  }
`
