import React, { useEffect, useState } from 'react'
import DetailSection from './detailsection'
import {
  LineupWrapper,
  LineupHeader,
  LineupLabel,
  MembersGroup,
} from './index.style'
import MemberSection from './membersection'
import { apiClientwithToken } from '../../utils/apiclient'
import { toast } from 'react-toastify'

const LineupDetail: React.FC<{ lineupId: number }> = ({ lineupId }) => {
  const [allmembers, setAllmembers] = useState<any>([])
  const [members, setMembers] = useState<any>([])
  const [detail, setDetail] = useState<any>(null)
  const [refresh, setRefresh] = useState<boolean>(true)

  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis-common-token'))
      .get('/lineup/member', { params: { id: lineupId } })
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
  }, [refresh])

  const onRefresh = () => {
    setRefresh(!refresh)
  }
  return (
    <LineupWrapper>
      <MembersGroup>
        <LineupHeader>
          <LineupLabel>All Members.</LineupLabel>
        </LineupHeader>
        <MemberSection allmembers={allmembers} />
      </MembersGroup>
      <MembersGroup>
        <LineupHeader>
          <LineupLabel>Information.</LineupLabel>
        </LineupHeader>
        <DetailSection members={members} detail={detail} />
      </MembersGroup>
    </LineupWrapper>
  )
}
export default LineupDetail
