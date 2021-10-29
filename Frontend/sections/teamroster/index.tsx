import React, { useState, useEffect } from 'react'
import {
  TeamRosterWrapper,
  TeamRosterGroup,
  MemberLabel,
  TeamRosterContent,
  TeamRosterButton,
  RosterHeader,
  ModalLabel,
  ModalInput,
  ModalForm,
  ModalHeader,
  ModalButton,
} from './index.style'

import TeamRosterSection from './teamrostersection'
import { Modal } from 'react-responsive-modal'
import { isEmpty } from '../../utils/isEmpty'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../utils/apiclient'

const TeamRoster: React.FC<{}> = () => {
  const [data, setData] = useState<any>([])
  const [roster, setRoster] = useState(false)
  const [title, setTitle] = useState<string>('')
  const [position, setPosition] = useState<string>('')
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis'))
      .get('/league')
      .then(
        (res) => {
          if (res.data.success) {
            setData(res.data.item)
          }
        },
        (err) => {
          if (err.response.status == 404) {
            toast.error('Server Disconected.')
          } else {
            toast.error(err.response.data.message)
          }
        },
      )
  }, [roster])

  const onRosterModal = () => {
    setRoster(!roster)
  }

  const onRemoveItem = (id: number) => {
    apiClientwithToken(localStorage.getItem('tennis'))
      .delete(`/league/${id}`)
      .then(
        (res) => {
          if (res.data.success) {
            const filter = data.filter((item: any) => item.id != id)
            setData(filter)
            toast.info(res.data.message)
          }
        },
        (err) => {
          if (err.response.status == 404) {
            toast.error('Server Disconected.')
          } else {
            toast.error(err.response.data.message)
          }
        },
      )
  }

  const onSave = () => {
    if (isEmpty(title)) {
      return toast.error('Please input the title.')
    }
    if (isEmpty(position)) {
      return toast.error('Please input the position')
    }
    if (isEmpty(time)) {
      return toast.error('Please input the time.')
    }

    apiClientwithToken(localStorage.getItem('tennis'))
      .post('/league', {
        title,
        position,
        time,
      })
      .then(
        (res) => {
          if (res.data.success) {
            toast.info(res.data.message)
            onRosterModal()
          }
        },
        (err) => {
          if (err.response.status == 404) {
            toast.error('Server Disconected.')
          } else {
            toast.error(err.response.data.message)
          }
        },
      )
  }
  return (
    <TeamRosterWrapper>
      <TeamRosterGroup>
        <RosterHeader>
          <MemberLabel>All League.</MemberLabel>
          <TeamRosterButton onClick={() => onRosterModal()}>
            {'New Add'}
          </TeamRosterButton>
        </RosterHeader>
        <TeamRosterContent>
          {data.map((item: any, index: number) => {
            return (
              <TeamRosterSection
                key={index}
                item={item}
                onRemoveItem={onRemoveItem}
              />
            )
          })}
        </TeamRosterContent>
      </TeamRosterGroup>
      <Modal open={roster} onClose={() => onRosterModal()} center>
        <ModalHeader>
          <MemberLabel> {'NEW LEAGUE'}</MemberLabel>
        </ModalHeader>
        <ModalForm>
          <ModalLabel>{'Title : '}</ModalLabel>
          <ModalInput
            value={title}
            onChange={(e: any) => setTitle(e.target.value.trim())}
          ></ModalInput>
        </ModalForm>
        <ModalForm>
          <ModalLabel>{'Position : '}</ModalLabel>
          <ModalInput
            value={position}
            onChange={(e: any) => setPosition(e.target.value.trim())}
          ></ModalInput>
        </ModalForm>
        <ModalForm>
          <ModalLabel>{'Time : '}</ModalLabel>
          <ModalInput
            value={time}
            onChange={(e: any) => setTime(e.target.value.trim())}
          ></ModalInput>
        </ModalForm>
        <br></br>
        <ModalButton onClick={onSave}>{'Submit'}</ModalButton>
      </Modal>
    </TeamRosterWrapper>
  )
}

export default TeamRoster
