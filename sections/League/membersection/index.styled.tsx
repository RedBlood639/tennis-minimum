import styled from 'styled-components'

export const MemberSectionWrapper = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  align-items: center;
  border-radius: 0.3rem;
  display: grid;
  grid-template-columns: 0fr 1fr 6fr 0.5fr 1fr;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: #d4ddf5;
  }
`

export const MemberName = styled.span`
  padding-left: 20px;
  line-break: anywhere;
`

export const MemberCheckBox = styled.input`
  margin-left: 20px;
`
