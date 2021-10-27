import React, { useState } from 'react'
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
  ModalButton,
} from './index.style'

import TeamRosterSection from './teamrostersection'
import { Modal } from 'react-responsive-modal'

const TeamRoster: React.FC<{}> = () => {
  const [roster, setRoster] = useState(false)

  const onRosterModal = () => {
    setRoster(!roster)
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
          <TeamRosterSection />
          <TeamRosterSection />
          <TeamRosterSection />
          <TeamRosterSection />
          <TeamRosterSection />
          <TeamRosterSection />
          <TeamRosterSection />
          <TeamRosterSection />
          <TeamRosterSection />
        </TeamRosterContent>
      </TeamRosterGroup>
      <Modal open={roster} onClose={() => onRosterModal()} center>
        <RosterHeader>
          <MemberLabel> {'NEW LEAGUE'}</MemberLabel>
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
        <br></br>
        <ModalButton>{'Submit'}</ModalButton>
      </Modal>
    </TeamRosterWrapper>
  )
}

export default TeamRoster
