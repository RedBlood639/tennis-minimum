import React from 'react'
import styled from 'styled-components'
import { metaData } from '../site-settings/metadata'
import { SEO } from '../components/Seo/seo'
// import {404}

const Empty = styled.div`
  min-height: 85vh;
`

const DynamicStores: React.FC = () => {
  return (
    <Empty>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />
    </Empty>
  )
}

export default DynamicStores
