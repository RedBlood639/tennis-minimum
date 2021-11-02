import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../../utils/apiclient'
import {
  MemberSectionWrapper,
  StyledTable,
  SaveButton,
  TableContent,
} from './index.style'

const MemberSection: React.FC<{
  allmembers: any
  onRefresh: Function
  lineupId: number
}> = ({ allmembers, onRefresh, lineupId }) => {
  const [selected, setSelected] = useState<Array<number>>([])

  const onSelectItem = (e: any, id: number) => {
    if (e.target.checked) {
      const data = selected
      data.push(id)
      setSelected(data)
    } else {
      const data = selected.filter((item: number) => item != id)
      setSelected(data)
    }
  }

  const onAddMembers = () => {
    apiClientwithToken(localStorage.getItem('tennis'))
      .post('/lineup/member', { members: selected, id: lineupId })
      .then((res) => {
        if (res.data.success) {
          toast.info(res.data.message)
          onRefresh()
          setSelected([])
        }
      })
      .catch((err) => {
        if (err.response.status == 404) {
          toast.error('Server Disconected.')
        } else {
          toast.error(err.response.data.message)
        }
      })
  }

  return (
    <MemberSectionWrapper>
      <TableContent>
        <StyledTable>
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Level</td>
            </tr>
          </thead>
          <tbody>
            {allmembers.map((item: any) => {
              return (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => onSelectItem(e, item.id)}
                    />
                  </td>
                  <td>{item.firstname + ' ' + item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone || '-'}</td>
                  <td>{item.skill}</td>
                </tr>
              )
            })}
          </tbody>
        </StyledTable>
      </TableContent>
      <SaveButton onClick={onAddMembers}>{'Add Members'}</SaveButton>
    </MemberSectionWrapper>
  )
}

export default MemberSection
