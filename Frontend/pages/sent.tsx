import React from 'react'
import { SEO } from '../components/Seo/seo'
import SentMessage from '../sections/sentmessage'
import { metaData } from '../site-settings/metadata'

const SentPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <SentMessage />
    </>
  )
}

export default SentPage
