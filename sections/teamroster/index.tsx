import React, { useState } from 'react'
import {
  TeamRosterWrapper,
  MembersGroup,
  TeamRosterGroup,
  MemberLabel,
  MemberContent,
  TeamRosterButton,
  RosterHeader,
  ModalLabel,
  ModalInput,
  ModalForm,
  ModalButton,
} from './index.style'
import MemberSection from './membersection'
import TeamRosterSection from './teamrostersection'
import { Modal } from 'react-responsive-modal'

const data = [
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
]

const TeamRoster: React.FC<{}> = () => {
  const [roster, setRoster] = useState(false)
  const [new1, setNew1] = useState<boolean>(true)

  const onRosterModal = (flag: boolean) => {
    setNew1(flag)
    setRoster(!roster)
  }
  return (
    <TeamRosterWrapper>
      <MembersGroup>
        <RosterHeader>
          <MemberLabel>All Members.</MemberLabel>
        </RosterHeader>
        <MemberContent>
          {data.map((item: any, index: number) => {
            return <MemberSection key={index} id={index} data={item} />
          })}
        </MemberContent>
      </MembersGroup>
      <TeamRosterGroup>
        <RosterHeader>
          <MemberLabel>All League.</MemberLabel>
          <TeamRosterButton onClick={() => onRosterModal(true)}>
            {'New Add'}
          </TeamRosterButton>
        </RosterHeader>
        <MemberContent>
          <TeamRosterSection onChange={onRosterModal} />
        </MemberContent>
      </TeamRosterGroup>
      <Modal open={roster} onClose={() => onRosterModal(new1)} center>
        <RosterHeader>
          <MemberLabel>{new1 ? 'NEW LEAGUE' : 'CHANGE THE LEAGUE'}</MemberLabel>
        </RosterHeader>
        <ModalForm>
          <ModalLabel>{'Title : '}</ModalLabel>
          <ModalInput></ModalInput>
        </ModalForm>
        <ModalForm>
          <ModalLabel>{'Club : '}</ModalLabel>
          <ModalInput></ModalInput>
        </ModalForm>
        <ModalForm>
          <ModalLabel>{'Time : '}</ModalLabel>
          <ModalInput></ModalInput>
        </ModalForm>
        <ModalButton>{'Submit'}</ModalButton>
      </Modal>
    </TeamRosterWrapper>
  )
}

export default TeamRoster
