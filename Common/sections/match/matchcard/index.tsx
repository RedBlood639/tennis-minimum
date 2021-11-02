import React from 'react'
import {
  MatchCardWrapper,
  MatchCardContent,
  MatchCardLabel,
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
}> = ({ data }) => {
  return (
    <MatchCardWrapper>
      <MatchCardContent>
        <MatchCardLabel>No. {data.id}</MatchCardLabel>
        <MatchCardLabel>{data.date}</MatchCardLabel>
        <MatchCardLabel>{data.opponent}</MatchCardLabel>
        <MatchCardLabel>{data.site}</MatchCardLabel>
        <MatchCardLabel>{data.result}</MatchCardLabel>
      </MatchCardContent>
    </MatchCardWrapper>
  )
}

export default MatchCard
