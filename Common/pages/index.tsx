import React from 'react'
import { SEO } from '../components/Seo/seo'
import Home from '../sections/home/home'
import { metaData } from '../site-settings/metadata'

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <Home />
    </>
  )
}

export default IndexPage
