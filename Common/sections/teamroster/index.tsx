import React, { useState, useEffect } from 'react'
import {
  TeamRosterWrapper,
  TeamRosterGroup,
  MemberLabel,
  TeamRosterContent,
  RosterHeader,
} from './index.style'

import TeamRosterSection from './teamrostersection'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../utils/apiclient'

const TeamRoster: React.FC<{}> = () => {
  const [data, setData] = useState<any>([])

  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis-common-token'))
      .get('/teamroster')
      .then(
        (res) => {
          if (res.data.success) {
            setData(res.data.item)
          }
        },
        (err) => {
          if (err.response.status == 404) {
            toast.error('Server Disconected.')
          } else {
            toast.error(err.response.data.message)
          }
        },
      )
  }, [])

  return (
    <TeamRosterWrapper>
      <TeamRosterGroup>
        <RosterHeader>
          <MemberLabel>All League.</MemberLabel>
        </RosterHeader>
        <TeamRosterContent>
          {data.map((item: any, index: number) => {
            return <TeamRosterSection key={index} item={item} />
          })}
        </TeamRosterContent>
      </TeamRosterGroup>
    </TeamRosterWrapper>
  )
}

export default TeamRoster
