import React from 'react'
import { useRouter } from 'next/router'
import { isEmpty } from '../utils/isEmpty'
import { SEO } from '../components/Seo/seo'
import Verify from '../sections/verify'
import { metaData } from '../site-settings/metadata'
const VerifyPage: React.FC<{}> = () => {
  const router = useRouter()
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      {isEmpty(router.query) ? '' : <Verify token={router.query.token} />}
    </>
  )
}

export default VerifyPage
