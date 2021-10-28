import React, { useState } from 'react'
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
  const [data, setDate] = useState<string>('')
  const [opponent, setOpponent] = useState<string>('')
  const [site, setSite] = useState<string>('')
  const [result, setResult] = useState<string>('')

  return (
    <FormWrapper>
      <FormContent>
        <Form>
          <Label>Date : </Label>
          <Input
            value={data}
            onChange={(e: any) => setDate(e.target.value.trim())}
          />
        </Form>
        <Form>
          <Label>Opponent : </Label>
          <Input
            value={opponent}
            onChange={(e: any) => setDate(e.target.value.trim())}
          />
        </Form>
        <Form>
          <Label>Site : </Label>
          <Input
            value={site}
            onChange={(e: any) => setDate(e.target.value.trim())}
          />
        </Form>
        <Form>
          <Label>Result : </Label>
          <Input
            value={result}
            onChange={(e: any) => setDate(e.target.value.trim())}
          />
        </Form>
        <Form />
      </FormContent>
      <SaveButton onClick={() => onDisplay(false)}>{'Save'}</SaveButton>
      <CancelButton onClick={() => onDisplay(false)}>{'Cancel'}</CancelButton>
    </FormWrapper>
  )
}

export default MatchForm
