import React from 'react'
import Image from 'next/dist/client/image'
import HomeImage from '../../../assests/image/home.jpg'

import {
  ImageSectionLabel,
  ImageSectionWrapper,
  MatchDisplay,
} from './index.style'

const ImageSection: React.FC<{}> = () => {
  return (
    <ImageSectionWrapper>
      <Image src={HomeImage} alt="Home Image" layout="responsive" />
      <MatchDisplay>
        <ImageSectionLabel>My Tennis Partners</ImageSectionLabel>
      </MatchDisplay>
    </ImageSectionWrapper>
  )
}

export default ImageSection
