import React from 'react'
import { metaData } from '../site-settings/metadata'
import { SEO } from '../components/Seo/seo'
import Members from '../sections/members'
const MatchPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <Members />
    </>
  )
}

export default MatchPage
