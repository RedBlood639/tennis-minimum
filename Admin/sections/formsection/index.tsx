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
    setState(e.target.value.trim())
  }
  return (
    <FormWrapper>
      <FormLabel>{label}</FormLabel>
      <FormInput
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => onChangeState(e)}
        type={type}
      ></FormInput>
    </FormWrapper>
  )
}

export default FormSection
