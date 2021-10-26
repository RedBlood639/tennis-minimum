import React from 'react'
import { SEO } from '../components/Seo/seo'
import TeamRoster from '../sections/teamroster'
import { metaData } from '../site-settings/metadata'
const TeamRosterPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <TeamRoster />
    </>
  )
}

export default TeamRosterPage
