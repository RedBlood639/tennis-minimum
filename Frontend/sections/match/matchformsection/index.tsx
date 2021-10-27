import React from 'react'
import {
  Form,
  Input,
  FormWrapper,
  Label,
  FormContent,
  SaveButton,
  CancelButton,
} from './index.style'
const MatchForm: React.FC<{ onDisplay: Function }> = ({ onDisplay }) => {
  return (
    <FormWrapper>
      <FormContent>
        <Form>
          <Label>Date : </Label>
          <Input></Input>
        </Form>
        <Form>
          <Label>Opponent : </Label>
          <Input></Input>
        </Form>
        <Form>
          <Label>Site : </Label>
          <Input></Input>
        </Form>
        <Form>
          <Label>Result : </Label>
          <Input></Input>
        </Form>
        <Form />
      </FormContent>
      <SaveButton onClick={() => onDisplay(false)}>{'Save'}</SaveButton>
      <CancelButton onClick={() => onDisplay(false)}>{'Cancel'}</CancelButton>
    </FormWrapper>
  )
}

export default MatchForm
