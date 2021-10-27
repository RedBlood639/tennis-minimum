import React from 'react'
import { useRouter } from 'next/router'
import {
  TeamRosterWrapper,
  TeamRosterLabel,
  TeamRosterContent,
  DeleteButton,
} from './index.style'

const TeamRosterSection: React.FC<{}> = () => {
  const router = useRouter()
  const toChangePath = () => {
    router.push('/league')
  }
  return (
    <TeamRosterWrapper onClick={toChangePath}>
      <TeamRosterContent>
        <TeamRosterLabel>title</TeamRosterLabel>
        <TeamRosterLabel>Position</TeamRosterLabel>
        <TeamRosterLabel>Time</TeamRosterLabel>
      </TeamRosterContent>
      <DeleteButton>{'DELET'}</DeleteButton>
    </TeamRosterWrapper>
  )
}

export default TeamRosterSection
