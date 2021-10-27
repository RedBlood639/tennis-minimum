import React from 'react'
import { SEO } from '../components/Seo/seo'
import SignIn from '../sections/signin/Index'
import { metaData } from '../site-settings/metadata'
const SignInPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <SignIn />
    </>
  )
}

export default SignInPage
