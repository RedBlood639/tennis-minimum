import React from 'react'
import {
  CardSectionWrapper,
  CardImage,
  CardDescription,
  CardLavel,
} from './index.style'
import Image from 'next/image'
import { CardProps } from '../home.type'

const CardSection: React.FC<CardProps> = ({ imageURL, description, alt }) => {
  return (
    <CardSectionWrapper>
      <CardImage>
        <Image src={imageURL} alt={alt} layout="responsive" />
      </CardImage>
      <CardDescription>
        <CardLavel>{description}</CardLavel>
      </CardDescription>
    </CardSectionWrapper>
  )
}

export default CardSection
