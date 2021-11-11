import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { apiClientwithToken } from '../../../utils/apiclient'
import {
  DetailContent,
  DetailForm,
  DetailInput,
  DetailLabel,
  DetailWrapper,
  MemberLabel,
  MemeberWrapper,
  DeleteButton,
  SaveButton,
  DetailContainer,
  DetailArea,
  LeagueHeader,
  LeagueHeaderLabel,
} from './index.style'

const MemberCard: React.FC<{
  item: any
  index: number
  onRefresh: Function
  id: number
}> = ({ item, index, onRefresh, id }) => {
  const onDelete = (usernumber: number) => {
    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .delete(`/teamroster/member/${usernumber}/${id}`)
      .then(
        (response) => {
          if (response.data.success) {
            onRefresh()
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
    <MemeberWrapper>
      <MemberLabel>{index}</MemberLabel>
      <MemberLabel>{item.firstname + ' ' + item.lastname}</MemberLabel>
      <div></div>
      <MemberLabel>{item.skill}</MemberLabel>
      <div></div>
      <DeleteButton onClick={() => onDelete(item.id)}>{'Delete'}</DeleteButton>
    </MemeberWrapper>
  )
}

const DetailSection: React.FC<{
  members: any
  detail: any
  onRefresh: Function
}> = ({ members, detail, onRefresh }) => {
  const [title, setTitle] = useState<string>('')
  const [position, setPosition] = useState<string>('  ')

  useEffect(() => {
    setTitle(detail === null ? '' : detail.title)
    setPosition(detail === null ? '' : detail.position)
  }, [detail])

  const onSave = () => {
    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .put('/teamroster/detail', {
        title,
        position,
        id: detail === null ? 0 : detail.id,
      })
      .then(
        (response) => {
          if (response.data.success) {
            toast.info(response.data.message)
            onRefresh()
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
    <DetailWrapper>
      <DetailContainer>
        <LeagueHeader>
          <LeagueHeaderLabel>{'League Detail : '}</LeagueHeaderLabel>
        </LeagueHeader>
        <DetailForm>
          <DetailLabel>{'Title : '}</DetailLabel>
          <DetailInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DetailForm>
        <DetailForm>
          <DetailLabel>{'Description : '}</DetailLabel>
          <DetailArea
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          ></DetailArea>
        </DetailForm>
        <DetailForm>
          <SaveButton onClick={onSave}>{'Save'}</SaveButton>
        </DetailForm>
        <br />
      </DetailContainer>
      <DetailContainer>
        <LeagueHeader>
          <LeagueHeaderLabel>{'Roster : '}</LeagueHeaderLabel>
        </LeagueHeader>
        <DetailContent>
          {members.map((item: any, index: number) => {
            return (
              <MemberCard
                id={detail === null ? 0 : detail.id}
                key={index}
                item={item}
                index={index + 1}
                onRefresh={onRefresh}
              ></MemberCard>
            )
          })}
        </DetailContent>
      </DetailContainer>
    </DetailWrapper>
  )
}

export default DetailSection
