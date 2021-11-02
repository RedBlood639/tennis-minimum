import React from 'react'
import { metaData } from '../site-settings/metadata'
import { SEO } from '../components/Seo/seo'
import Lineup from '../sections/lineup'
const LineupPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <Lineup />
    </>
  )
}

export default LineupPage
