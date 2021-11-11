import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../../utils/apiclient'
import { isEmpty } from '../../../utils/isEmpty'
import {
  Form,
  Input,
  FormWrapper,
  Label,
  FormContent,
  SaveButton,
  CancelButton,
} from './index.style'

type dataprops = {
  date: string
  opponent: string
  site: string
  result: string
}

const MatchForm: React.FC<{
  onDisplay: Function
  id: number
  item: dataprops
}> = ({ onDisplay, id, item }) => {
  const [date, setDate] = useState<string>('')
  const [opponent, setOpponent] = useState<string>('')
  const [site, setSite] = useState<string>('')
  const [result, setResult] = useState<string>('')

  useEffect(() => {
    if (id !== 0) {
      setDate(item.date || '')
      setOpponent(item.opponent || '')
      setSite(item.site || '')
      setResult(item.result || '')
    }
  }, [])
  const onSave = async () => {
    if (isEmpty(date)) {
      return toast.error('Please input the data.')
    }
    if (isEmpty(opponent)) {
      return toast.error('Please input the opponent.')
    }
    if (isEmpty(site)) {
      return toast.error('Please input the site.')
    }
    if (isEmpty(result)) {
      return toast.error('Please input the result.')
    }

    await apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .post('match', {
        date,
        opponent,
        site,
        result,
        id,
      })
      .then(
        (response) => {
          if (response.data.success) {
            toast.info(response.data.message)
            onDisplay(false, id)
          }
        },
        (error) => {
          if (error.response.status == 404) {
            toast.error('Server Disconected.')
          } else {
            toast.error(error.response.data.message)
          }
        },
      )
  }
  return (
    <FormWrapper>
      <FormContent>
        <Form>
          <Label>Date : </Label>
          <Input
            value={date}
            onChange={(e: any) => setDate(e.target.value.trim())}
          />
        </Form>
        <Form>
          <Label>Opponent : </Label>
          <Input
            value={opponent}
            onChange={(e: any) => setOpponent(e.target.value.trim())}
          />
        </Form>
        <Form>
          <Label>Site : </Label>
          <Input
            value={site}
            onChange={(e: any) => setSite(e.target.value.trim())}
          />
        </Form>
        <Form>
          <Label>Result : </Label>
          <Input
            value={result}
            onChange={(e: any) => setResult(e.target.value.trim())}
          />
        </Form>
        <Form />
      </FormContent>
      <SaveButton onClick={onSave}>{'Save'}</SaveButton>
      <CancelButton onClick={() => onDisplay(false, id)}>
        {'Cancel'}
      </CancelButton>
    </FormWrapper>
  )
}

export default MatchForm
