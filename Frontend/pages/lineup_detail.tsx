import React from 'react'
import { useRouter } from 'next/router'
import { metaData } from '../site-settings/metadata'
import { SEO } from '../components/Seo/seo'
import LineupDetail from '../sections/lineupdetail'
import { isEmpty } from '../utils/isEmpty'
const LineupDetailPage: React.FC<{}> = () => {
  const router = useRouter()

  return (
    <>
      <SEO
        title={metaData.home.title}
        description={metaData.home.description}
      />

      {isEmpty(router.query) ? '' : <LineupDetail lineupId={router.query.id} />}
    </>
  )
}

export default LineupDetailPage
