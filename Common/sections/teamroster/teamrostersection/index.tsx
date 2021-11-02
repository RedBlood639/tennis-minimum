import React from 'react'
import { useRouter } from 'next/router'
import {
  TeamRosterWrapper,
  TeamRosterLabel,
  TeamRosterContent,
  DeleteButton,
} from './index.style'

const TeamRosterSection: React.FC<{ item: any }> = ({ item }) => {
  const router = useRouter()
  const toChangePath = () => {
    router.push({ pathname: '/league_detail', query: { id: 1 } })
  }

  return (
    <TeamRosterWrapper>
      <TeamRosterContent onClick={toChangePath}>
        <TeamRosterLabel kind="title">{item.title}</TeamRosterLabel>
        <TeamRosterLabel>{item.position}</TeamRosterLabel>
      </TeamRosterContent>
    </TeamRosterWrapper>
  )
}

export default TeamRosterSection
