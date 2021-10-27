import React from 'react'
import { SEO } from '../components/Seo/seo'
import SignUp from '../sections/signup'
import { metaData } from '../site-settings/metadata'
const SignInPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <SignUp />
    </>
  )
}

export default SignInPage
