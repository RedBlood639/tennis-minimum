import React from 'react'
import DetailSection from './detailsection'
import {
  LeagueWrapper,
  MemberContent,
  LeagueContent,
  LeagueHeader,
  LeagueLabel,
  MembersGroup,
} from './index.style'
import MemberSection from './membersection'
const data = [
  { name: 'adasd', rate: 0 },
  { name: 'adfsdfsdfsdfsdfasd', rate: 0 },
  { name: 'adazfdsfdsfsdfsd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adfsdfsdfsdfsdfasd', rate: 0 },
  { name: 'adazfdsfdsfsdfsd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adfsdfsdfsdfsdfasd', rate: 0 },
  { name: 'adazfdsfdsfsdfsd', rate: 0 },
  { name: 'adasd', rate: 0 },
  { name: 'adasd', rate: 0 },
]
const League: React.FC<{}> = () => {
  return (
    <LeagueWrapper>
      <MembersGroup>
        <LeagueHeader>
          <LeagueLabel>All Members.</LeagueLabel>
        </LeagueHeader>
        <MemberContent>
          {data.map((item: any, index: number) => {
            return <MemberSection key={index} id={index} data={item} />
          })}
        </MemberContent>
      </MembersGroup>
      <MembersGroup>
        <LeagueHeader>
          <LeagueLabel>League Detail.</LeagueLabel>
        </LeagueHeader>
        <DetailSection />
      </MembersGroup>
    </LeagueWrapper>
  )
}
export default League
