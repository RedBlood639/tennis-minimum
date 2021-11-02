import React from 'react'
import { SEO } from '../components/Seo/seo'
import Account from '../sections/account'
import { metaData } from '../site-settings/metadata'

const AccountPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <Account />
    </>
  )
}

export default AccountPage
