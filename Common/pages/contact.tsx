import React from 'react'
import { SEO } from '../components/Seo/seo'
import Contact from '../sections/contact'
import { metaData } from '../site-settings/metadata'

const ContactPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <Contact />
    </>
  )
}

export default ContactPage
