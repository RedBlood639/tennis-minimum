import React from 'react'
import { FormWrapper, FormLabel, FormInput } from './index.style'
import { FormProps } from './type'
const FormSection: React.FC<FormProps> = ({
  label,
  placeholder,
  value,
  setState,
  type,
}) => {
  const onChangeState = (e: any) => {
    setState(e.target.value)
  }
  return (
    <FormWrapper>
      <FormLabel>{label}</FormLabel>
      <FormInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeState(e)}
        type={type}
      ></FormInput>
    </FormWrapper>
  )
}

export default FormSection
