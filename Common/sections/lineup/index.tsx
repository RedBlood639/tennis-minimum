import React, { useState, useEffect } from 'react'
import Modal from 'react-responsive-modal'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../utils/apiclient'
import {
  LineupWrapper,
  LineupHeader,
  LineupContent,
  LineupHeaderLabel,
} from './index.style'
import LineupCard from './lineupcard'

const Lineup: React.FC<{}> = () => {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis-common-token'))
      .get('/lineup')
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.item)
          setData(res.data.item)
        }
      })
      .catch((err) => {
        if (err.response.status == 404) {
          toast.error('Server Disconected.')
        } else {
          toast.error(err.response.data.message)
        }
      })
  }, [])

  return (
    <LineupWrapper>
      <LineupHeader>
        <LineupHeaderLabel>{'Lineup List.'}</LineupHeaderLabel>
      </LineupHeader>
      <LineupContent>
        {data.map((item: any, index: number) => {
          return <LineupCard item={item} key={index} index={index + 1} />
        })}
      </LineupContent>
    </LineupWrapper>
  )
}

export default Lineup
