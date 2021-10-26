import React from 'react'
import { SEO } from '../components/Seo/seo'
import Profile from '../sections/profile'
import { metaData } from '../site-settings/metadata'

const ProfilePage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <Profile />
    </>
  )
}

export default ProfilePage
