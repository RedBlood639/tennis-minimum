import styled from 'styled-components'

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  padding-bottom: 10px;
`

export const FormInput = styled.input`
  border-radius: 5%;
  height: 40px;
  border: 1px solid #495057;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`

export const FormLabel = styled.span``
