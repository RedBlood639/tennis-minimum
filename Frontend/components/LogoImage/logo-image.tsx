import React from 'react'
import Router from 'next/router'
import { LogoBox } from './logo-image.style'
import Image from 'next/image'

type LogoProps = {
  imageUrl: string
  alt: string
  onClick?: () => void
  align?: string
  herf?: string
  width: number
  height: number
}

const LogoImage: React.FC<LogoProps> = ({
  herf = '/',
  imageUrl,
  alt,
  onClick,
  width,
  height,
}) => {
  const onLogoClick = (herf: string) => {
    Router.push(herf)
    if (onClick) {
      onClick()
    }
  }
  return (
    <LogoBox onClick={() => onLogoClick(herf)}>
      <Image src={imageUrl} alt={alt} width={width} height={height} />
    </LogoBox>
  )
}

export default LogoImage
