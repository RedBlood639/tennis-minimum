import React from 'react'
import Image from 'next/dist/client/image'
import HomeImage from '../../../assests/image/home.jpg'
import { ImageSectionLabel, ImageSectionWrapper } from './index.style'
const ImageSection: React.FC<{}> = () => {
  return (
    <ImageSectionWrapper>
      <Image src={HomeImage} alt="Home Image" layout="responsive" />
      <ImageSectionLabel>My Tennis Partners</ImageSectionLabel>
    </ImageSectionWrapper>
  )
}

export default ImageSection
