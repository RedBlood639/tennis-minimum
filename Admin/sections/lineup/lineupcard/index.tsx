import React from 'react'
import { useRouter } from 'next/router'
import {
  LineupCardWrapper,
  LineupCardForm,
  LineupCardLabel,
  LineupCardButton,
  No,
} from './index.style'

const LineupCard: React.FC<{
  item: any
  index: number
  onRemoveItem: Function
}> = ({ index, item, onRemoveItem }) => {
  const router = useRouter()

  const onDetail = () => {
    router.push({ pathname: '/lineup_detail', query: { id: item.id } })
  }
  return (
    <LineupCardWrapper>
      <LineupCardForm onClick={onDetail}>
        <No>No {index}.</No>
        <LineupCardLabel>{item.title}</LineupCardLabel>
        <LineupCardLabel>{item.time}</LineupCardLabel>
      </LineupCardForm>
      <LineupCardButton onClick={() => onRemoveItem(item.id)}>
        {'Delete'}
      </LineupCardButton>
    </LineupCardWrapper>
  )
}

export default LineupCard
