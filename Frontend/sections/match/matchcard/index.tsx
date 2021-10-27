import React from 'react'
import {
  MatchCardWrapper,
  MatchCardContent,
  MatchCardLabel,
  DeleteButton,
  UpdateButton,
} from './index.style'

type dataProps = {
  Date: string
  Opponent: string
  Result: string
  Site: string
}

const MatchCard: React.FC<{
  data: dataProps
  index: number
  onDisplay: Function
}> = ({ data, index, onDisplay }) => {
  return (
    <MatchCardWrapper>
      <MatchCardContent>
        <MatchCardLabel>{index}</MatchCardLabel>
        <MatchCardLabel>{data.Date}</MatchCardLabel>
        <MatchCardLabel>{data.Opponent}</MatchCardLabel>
        <MatchCardLabel>{data.Site}</MatchCardLabel>
        <MatchCardLabel>{data.Result}</MatchCardLabel>
        <UpdateButton onClick={() => onDisplay(true)}>{'Change'}</UpdateButton>
        <DeleteButton>{'Delete'}</DeleteButton>
      </MatchCardContent>
    </MatchCardWrapper>
  )
}

export default MatchCard
