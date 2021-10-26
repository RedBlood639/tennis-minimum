import styled from 'styled-components'

export const MemberSectionWrapper = styled.div`
  width: 100%;
  height: 50px;
  align-items: center;
  border-radius: 0.3rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  border-bottom: 1px dotted gray;
  &:hover {
    background-color: #d4ddf5;
  }
`

export const MemberName = styled.span`
  padding-left: 20px;
`

export const MemvberRate = styled.span``
