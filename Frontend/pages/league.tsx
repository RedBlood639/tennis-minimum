import React from 'react'
import { metaData } from '../site-settings/metadata'
import { SEO } from '../components/Seo/seo'
import League from '../sections/League'
const LeaguePage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <League />
    </>
  )
}

export default LeaguePage
