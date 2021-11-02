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

const RosterDetail: React.FC<{ rosterId: number }> = ({ rosterId }) => {
  const [allmembers, setAllmembers] = useState<any>([])
  const [members, setMembers] = useState<any>([])
  const [detail, setDetail] = useState<any>(null)

  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis-common-token'))
      .get('/teamroster/member', { params: { id: rosterId } })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.item)
          setAllmembers(res.data.item.allmembers)
          setMembers(res.data.item.members)
          setDetail(res.data.item.detail)
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
          <LeagueLabel>Information.</LeagueLabel>
        </LeagueHeader>
        <DetailSection members={members} detail={detail} />
      </MembersGroup>
    </LeagueWrapper>
  )
}
export default RosterDetail
