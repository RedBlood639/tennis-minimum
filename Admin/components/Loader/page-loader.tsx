import React from 'react'
import { LoaderBox, Spinner } from './page-loader.style'

const PageLoader: React.FC<{}> = () => {
  return (
    <LoaderBox>
      <Spinner />
    </LoaderBox>
  )
}

export default PageLoader
