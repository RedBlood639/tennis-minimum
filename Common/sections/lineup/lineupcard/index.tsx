import React from 'react'
import { useRouter } from 'next/router'
import {
  LineupCardWrapper,
  LineupCardForm,
  LineupCardLabel,
  No,
} from './index.style'

const LineupCard: React.FC<{
  item: any
  index: number
}> = ({ index, item }) => {
  const router = useRouter()

  const onDetail = () => {
    router.push({ pathname: '/lineup_detail', query: { id: item.id } })
  }
  return (
    <LineupCardWrapper onClick={onDetail}>
      <LineupCardForm>
        <No>No {index}.</No>
        <LineupCardLabel>{item.title}</LineupCardLabel>
        <LineupCardLabel>{item.time}</LineupCardLabel>
      </LineupCardForm>
    </LineupCardWrapper>
  )
}

export default LineupCard
