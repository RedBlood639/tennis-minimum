import React from 'react'
import DetailSection from './detailsection'
import {
  LeagueWrapper,
  LeagueHeader,
  LeagueLabel,
  MembersGroup,
} from './index.style'

const League: React.FC<{}> = () => {
  return (
    <LeagueWrapper>
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
