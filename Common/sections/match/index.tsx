import React, { useState, useEffect } from 'react'
import {
  MatchContent,
  MatchHeader,
  MatchWrapper,
  MatchLabel,
  MatchCards,
} from './index.style'
import MatchCard from './matchcard'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../utils/apiclient'
import { isEmpty } from '../../utils/isEmpty'

const Match: React.FC<{}> = () => {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    onGetItems()
  }, [])

  const onGetItems = () => {
    apiClientwithToken(localStorage.getItem('tennis-common-token'))
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

  return (
    <MatchWrapper>
      <MatchContent>
        <MatchHeader>
          <MatchLabel>Matches.</MatchLabel>
        </MatchHeader>
        <MatchCards>
          {!isEmpty(data)
            ? data.map((item: any, index: number) => {
                return <MatchCard data={item} key={index} />
              })
            : null}
        </MatchCards>
      </MatchContent>
    </MatchWrapper>
  )
}
export default Match
