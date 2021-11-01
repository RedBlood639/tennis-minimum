import React from 'react'
import {
  MatchCardWrapper,
  MatchCardContent,
  MatchCardLabel,
  DeleteButton,
  UpdateButton,
} from './index.style'

type dataProps = {
  id: number
  date: string
  opponent: string
  result: string
  site: string
}

const MatchCard: React.FC<{
  data: dataProps
  onDisplay: Function
  onRemoveItem: Function
}> = ({ data, onDisplay, onRemoveItem }) => {
  return (
    <MatchCardWrapper>
      <MatchCardContent>
        <MatchCardLabel>No. {data.id}</MatchCardLabel>
        <MatchCardLabel>{data.date}</MatchCardLabel>
        <MatchCardLabel>{data.opponent}</MatchCardLabel>
        <MatchCardLabel>{data.site}</MatchCardLabel>
        <MatchCardLabel>{data.result}</MatchCardLabel>
        <UpdateButton onClick={() => onDisplay(true, data.id)}>
          {'Change'}
        </UpdateButton>
        <DeleteButton onClick={() => onRemoveItem(data.id)}>
          {'Delete'}
        </DeleteButton>
      </MatchCardContent>
    </MatchCardWrapper>
  )
}

export default MatchCard
