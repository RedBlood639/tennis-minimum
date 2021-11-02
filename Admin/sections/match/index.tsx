import React, { useState, useEffect } from 'react'
import {
  MatchContent,
  MatchHeader,
  MatchWrapper,
  MatchLabel,
  SaveButton,
  MatchCards,
} from './index.style'
import MatchForm from './matchformsection'
import MatchCard from './matchcard'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../utils/apiclient'
import { isEmpty } from '../../utils/isEmpty'

type dataprops = {
  date: string
  opponent: string
  site: string
  result: string
}

const Match: React.FC<{}> = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [data, setData] = useState<any>([])
  const [id, setID] = useState<number>(0)
  const [item, setItem] = useState<dataprops>(null)

  const onDisplay = (flag: boolean, id: number) => {
    if (open && flag) {
      return toast.error('please save the data.')
    }
    setID(id)
    setOpen(flag)
    if (id !== 0) {
      const filterdata = data.filter((item: any) => item.id === id)
      setItem(filterdata[0])
    }
    if (!flag) {
      onGetItems()
    }
  }
  useEffect(() => {
    onGetItems()
  }, [])

  const onGetItems = () => {
    apiClientwithToken(localStorage.getItem('tennis'))
      .get('/match')
      .then(
        (response) => {
          if (response.data.success) {
            setData(response.data.item)
          }
        },
        (error) => {
          if (error.response.status == 404) {
            toast.error('Server Disconected.')
          } else {
            toast.error(error.response.data.message)
          }
        },
      )
  }
  const onRemoveItem = (id: number) => {
    apiClientwithToken(localStorage.getItem('tennis'))
      .delete(`/match/${id}`)
      .then(
        (response) => {
          if (response.data.success) {
            const filter = data.filter((item: any) => item.id !== id)
            setData(filter)
          }
        },
        (error) => {
          if (error.response.status == 404) {
            toast.error('Server Disconected.')
          } else {
            toast.error(error.response.data.message)
          }
        },
      )
  }
  return (
    <MatchWrapper>
      <MatchContent>
        <MatchHeader>
          <MatchLabel>Matches.</MatchLabel>
          <SaveButton onClick={() => onDisplay(true, 0)}>{'New +'}</SaveButton>
        </MatchHeader>
        {open ? <MatchForm onDisplay={onDisplay} id={id} item={item} /> : null}
        <MatchCards>
          {!isEmpty(data)
            ? data.map((item: any, index: number) => {
                return (
                  <MatchCard
                    data={item}
                    key={index}
                    onDisplay={onDisplay}
                    onRemoveItem={onRemoveItem}
                  />
                )
              })
            : null}
        </MatchCards>
      </MatchContent>
    </MatchWrapper>
  )
}
export default Match
