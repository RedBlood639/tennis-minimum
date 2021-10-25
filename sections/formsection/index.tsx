import React from 'react'
import { FormWrapper, FormLabel, FormInput } from './index.style'
import { FormProps } from './type'
const FormSection: React.FC<FormProps> = ({ label, placeholder }) => {
  return (
    <FormWrapper>
      <FormLabel>{label}</FormLabel>
      <FormInput placeholder={placeholder}></FormInput>
    </FormWrapper>
  )
}

export default FormSection
