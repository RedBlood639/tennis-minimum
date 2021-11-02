import React from 'react'
import { SEO } from '../components/Seo/seo'
import Forgot from '../sections/forgot'
import { metaData } from '../site-settings/metadata'
const ForgotPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <Forgot />
    </>
  )
}

export default ForgotPage
