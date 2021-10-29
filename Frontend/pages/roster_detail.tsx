import React from 'react'
import { metaData } from '../site-settings/metadata'
import { SEO } from '../components/Seo/seo'
import RosterDetail from '../sections/roster_detail'
const RosterDetailPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <RosterDetail />
    </>
  )
}

export default RosterDetailPage
