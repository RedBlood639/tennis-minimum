import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../utils/apiclient'
import {
  MemberContent,
  MembersGroup,
  MemberWrapper,
  MemberLabel,
  MemberHeader,
} from './index.style'
import MemberSection from './membersection'

const Members: React.FC<{}> = () => {
  const [data, setData] = useState<any>([])
  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis'))
      .get('/members')
      .then((res) => {
        if (res.data.success) {
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
    <MemberWrapper>
      <MembersGroup>
        <MemberHeader>
          <MemberLabel>All Members.</MemberLabel>
        </MemberHeader>
        <MemberContent>
          <MemberSection data={data} />
        </MemberContent>
      </MembersGroup>
    </MemberWrapper>
  )
}

export default Members
