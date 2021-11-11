import React, { useState, useEffect } from 'react'
import Modal from 'react-responsive-modal'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../utils/apiclient'
import {
  LineupWrapper,
  LineupHeader,
  LineupContent,
  LineupHeaderLabel,
  LineupHeaderButton,
  ModalInput,
  ModalForm,
  ModalLabel,
} from './index.style'
import LineupCard from './lineupcard'

const Lineup: React.FC<{}> = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [data, setData] = useState<any>([])

  const onOpened = (flag: boolean) => {
    setOpen(flag)
    setTime('')
    setTitle('')
  }

  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .get('/lineup')
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.item)
          setData(res.data.item)
        }
      })
      .catch((err) => {
        if (err.response.status == 404) {
          toast.error('Server Disconected.')
        } else {
          toast.error(err.response.data.message)
        }
      })
  }, [])

  const onSave = () => {
    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .post('/lineup', {
        title,
        time,
      })
      .then((res) => {
        if (res.data.success) {
          toast.info(res.data.message)
          onOpened(false)
        }
      })
      .catch((err) => {
        if (err.response.status == 404) {
          toast.error('Server Disconected.')
        } else {
          toast.error(err.response.data.message)
        }
      })
  }

  const onRemoveItem = (id: number) => {
    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .delete(`/lineup/${id}`)
      .then((res) => {
        if (res.data.success) {
          const filter = data.filter((item: any) => item.id != id)
          setData(filter)
          toast.info(res.data.message)
        }
      })
      .catch((err) => {
        if (err.response.status == 404) {
          toast.error('Server Disconected.')
        } else {
          toast.error(err.response.data.message)
        }
      })
  }
  return (
    <LineupWrapper>
      <LineupHeader>
        <LineupHeaderLabel>{'Lineup List.'}</LineupHeaderLabel>
        <LineupHeaderButton onClick={() => onOpened(true)}>
          {'ADD'}
        </LineupHeaderButton>
      </LineupHeader>
      <LineupContent>
        {data.map((item: any, index: number) => {
          return (
            <LineupCard
              item={item}
              key={index}
              index={index + 1}
              onRemoveItem={onRemoveItem}
            />
          )
        })}
      </LineupContent>

      {/*  */}
      <Modal open={open} onClose={() => onOpened(false)} center>
        <LineupHeaderLabel>{'NEW LINEUP'}</LineupHeaderLabel>
        <LineupContent>
          <ModalForm>
            <ModalLabel>{'Title : '}</ModalLabel>
            <ModalInput
              value={title}
              onChange={(e) => setTitle(e.target.value.trim())}
            />
          </ModalForm>
          <ModalForm>
            <ModalLabel>{'Time : '}</ModalLabel>
            <ModalInput
              value={time}
              onChange={(e) => setTime(e.target.value.trim())}
            />
          </ModalForm>
          <ModalForm>
            <ModalLabel></ModalLabel>
            <LineupHeaderButton onClick={onSave}>{'Save'}</LineupHeaderButton>
          </ModalForm>
        </LineupContent>
      </Modal>
    </LineupWrapper>
  )
}

export default Lineup
