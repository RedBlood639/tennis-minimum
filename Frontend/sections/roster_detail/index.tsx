import React, { useEffect, useState } from 'react'
import DetailSection from './detailsection'
import {
  LeagueWrapper,
  LeagueHeader,
  LeagueLabel,
  MembersGroup,
} from './index.style'
import MemberSection from './membersection'
import { apiClientwithToken } from '../../utils/apiclient'
import { toast } from 'react-toastify'

const RosterDetail: React.FC<{}> = () => {
  const [allmembers, setAllmembers] = useState<any>([])
  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis'))
      .get('/teamroster/member', { params: { id: 1 } })
      .then((res) => {
        if (res.data.success) {
          setAllmembers(res.data.item.allmembers)
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
    <LeagueWrapper>
      <MembersGroup>
        <LeagueHeader>
          <LeagueLabel>All Members.</LeagueLabel>
        </LeagueHeader>
        <MemberSection allmembers={allmembers} />
      </MembersGroup>
      <MembersGroup>
        <LeagueHeader>
          <LeagueLabel>Teams Roster Detail.</LeagueLabel>
        </LeagueHeader>
        <DetailSection />
      </MembersGroup>
    </LeagueWrapper>
  )
}
export default RosterDetail
