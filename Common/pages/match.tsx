import React from 'react'
import { metaData } from '../site-settings/metadata'
import { SEO } from '../components/Seo/seo'
import Match from '../sections/match'
const MatchPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <Match />
    </>
  )
}

export default MatchPage
