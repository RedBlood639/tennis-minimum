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
  const [members, setMembers] = useState<any>([])
  const [detail, setDetail] = useState<any>(null)
  const [refresh, setRefresh] = useState<boolean>(true)

  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis'))
      .get('/teamroster/member', { params: { id: 1 } })
      .then((res) => {
        if (res.data.success) {
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
  }, [refresh])

  const onRefresh = () => {
    setRefresh(!refresh)
  }
  return (
    <LeagueWrapper>
      <MembersGroup>
        <LeagueHeader>
          <LeagueLabel>All Members.</LeagueLabel>
        </LeagueHeader>
        <MemberSection allmembers={allmembers} onRefresh={onRefresh} />
      </MembersGroup>
      <MembersGroup>
        <LeagueHeader>
          <LeagueLabel>Teams Roster Detail.</LeagueLabel>
        </LeagueHeader>
        <DetailSection
          members={members}
          detail={detail}
          onRefresh={onRefresh}
        />
      </MembersGroup>
    </LeagueWrapper>
  )
}
export default RosterDetail
