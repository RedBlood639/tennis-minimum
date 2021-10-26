import React from 'react'
import {
  TeamRosterWrapper,
  TeamRosterLabel,
  TeamRosterButton,
  TeamRosterContent,
} from './index.style'

const TeamRosterSection: React.FC<{ onChange: Function }> = ({ onChange }) => {
  return (
    <TeamRosterWrapper>
      <TeamRosterContent onClick={() => onChange(false)}>
        <TeamRosterLabel>title</TeamRosterLabel>
        <TeamRosterLabel>Position</TeamRosterLabel>
        <TeamRosterLabel>Time</TeamRosterLabel>
      </TeamRosterContent>
      <TeamRosterButton>{'DELET'}</TeamRosterButton>
    </TeamRosterWrapper>
  )
}

export default TeamRosterSection
