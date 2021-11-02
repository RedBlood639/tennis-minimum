import React from 'react'
import { SEO } from '../components/Seo/seo'
import Panel from '../sections/panel'
import { metaData } from '../site-settings/metadata'

const PanelPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
      <Panel />
    </>
  )
}

export default PanelPage
