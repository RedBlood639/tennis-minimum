import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { metaData } from '../site-settings/metadata'
import { SEO } from '../components/Seo/seo'
import RosterDetail from '../sections/roster_detail'
import { isEmpty } from '../utils/isEmpty'
const RosterDetailPage: React.FC<{}> = () => {
  const router = useRouter()

  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />

      {isEmpty(router.query) ? '' : <RosterDetail rosterId={router.query.id} />}
    </>
  )
}

export default RosterDetailPage
