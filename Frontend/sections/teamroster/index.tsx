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

  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis'))
      .get('/teamroster')
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
    setTitle('')
    setPosition('')
  }

  const onRemoveItem = (id: number) => {
    apiClientwithToken(localStorage.getItem('tennis'))
      .delete(`/teamroster/${id}`)
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
      return toast.error('Please input the description')
    }

    apiClientwithToken(localStorage.getItem('tennis'))
      .post('/teamroster', {
        title,
        position,
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
          <MemberLabel>All TeamRoster.</MemberLabel>
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
          <MemberLabel> {'NEW TEAMROSTER'}</MemberLabel>
        </ModalHeader>
        <ModalForm>
          <ModalLabel>{'Title : '}</ModalLabel>
          <ModalInput
            value={title}
            onChange={(e: any) => setTitle(e.target.value.trim())}
          ></ModalInput>
        </ModalForm>
        <ModalForm>
          <ModalLabel>{'Description : '}</ModalLabel>
          <ModalInput
            value={position}
            onChange={(e: any) => setPosition(e.target.value.trim())}
          ></ModalInput>
        </ModalForm>
        <br></br>
        <ModalButton onClick={onSave}>{'Submit'}</ModalButton>
      </Modal>
    </TeamRosterWrapper>
  )
}

export default TeamRoster
