import React, { useState, useEffect } from 'react'
import {
  DetailContent,
  DetailForm,
  DetailInput,
  DetailLabel,
  DetailWrapper,
  MemberLabel,
  MemeberWrapper,
  DetailContainer,
  LeagueHeader,
  LeagueHeaderLabel,
} from './index.style'

const MemberCard: React.FC<{
  item: any
  index: number
}> = ({ item, index }) => {
  return (
    <MemeberWrapper>
      <MemberLabel>{index}</MemberLabel>
      <MemberLabel>{item.firstname + ' ' + item.lastname}</MemberLabel>
      <div></div>
      <MemberLabel>{item.skill}</MemberLabel>
      <div></div>
    </MemeberWrapper>
  )
}

const DetailSection: React.FC<{
  members: any
  detail: any
}> = ({ members, detail }) => {
  const [title, setTitle] = useState<string>('')
  const [position, setPosition] = useState<string>('  ')

  useEffect(() => {
    setTitle(detail === null ? '' : detail.title)
    setPosition(detail === null ? '' : detail.time)
  }, [detail])

  return (
    <DetailWrapper>
      <DetailContainer>
        <LeagueHeader>
          <LeagueHeaderLabel>{'Lineup Detail : '}</LeagueHeaderLabel>
        </LeagueHeader>
        <DetailForm>
          <DetailLabel>{'Title : '}</DetailLabel>
          <DetailInput
            value={title}
            disabled
            onChange={(e) => setTitle(e.target.value)}
          />
        </DetailForm>
        <DetailForm>
          <DetailLabel>{'Time : '}</DetailLabel>
          <DetailInput
            value={position}
            disabled
            onChange={(e) => setPosition(e.target.value)}
          />
        </DetailForm>

        <br />
      </DetailContainer>
      <DetailContainer>
        <LeagueHeader>
          <LeagueHeaderLabel>{'Players : '}</LeagueHeaderLabel>
        </LeagueHeader>
        <DetailContent>
          {members.map((item: any, index: number) => {
            return (
              <MemberCard
                key={index}
                item={item}
                index={index + 1}
              ></MemberCard>
            )
          })}
        </DetailContent>
      </DetailContainer>
    </DetailWrapper>
  )
}

export default DetailSection
