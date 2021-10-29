import React from 'react'
import { useRouter } from 'next/router'
import {
  TeamRosterWrapper,
  TeamRosterLabel,
  TeamRosterContent,
  DeleteButton,
} from './index.style'

const TeamRosterSection: React.FC<{ item: any; onRemoveItem: Function }> = ({
  item,
  onRemoveItem,
}) => {
  const router = useRouter()
  const toChangePath = () => {
    router.push('/roster_detail')
  }

  return (
    <TeamRosterWrapper>
      <TeamRosterContent onClick={toChangePath}>
        <TeamRosterLabel kind="title">{item.title}</TeamRosterLabel>
        <TeamRosterLabel>{item.position}</TeamRosterLabel>
      </TeamRosterContent>
      <DeleteButton onClick={() => onRemoveItem(item.id)}>
        {'DELET'}
      </DeleteButton>
    </TeamRosterWrapper>
  )
}

export default TeamRosterSection
