import styled from 'styled-components'
import Modal from 'react-responsive-modal'
export const MemberSectionWrapper = styled.div`
  & .tableDiv {
    overflow: auto;
  }
  width: 100%;
`

export const StyledTable = styled.table`
  overflow: scroll;
  caption-side: top;
  min-width: 100%;
  border: 1px solid #efefef;
  border-collapse: collapse;
  caption-side: bottom;
  td {
    padding: 10px 20px;
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
export const ModalContent = styled.div`
  display: flex;
  row-gap: 10px;
  column-gap: 20px;
`
export const ModalLabel = styled.div`
  & p {
    text-align: right;
    min-width: 80px;
    font-weight: 500;
    height: 20px;
  }
`

export const ModalValue = styled.div`
  & p {
    height: 20px;
    line-break: anywhere;
  }
`

export const CustomModal = styled(Modal)``
export const HeaderLabel = styled.h2`
  line-break: anywhere;
`
