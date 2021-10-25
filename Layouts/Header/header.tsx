import React from 'react'
import { HeaderWrapper, HeaderLogo, HeaderLogoLabel } from './header.style'
import LogoImage from '../../components/LogoImage/logo-image'
import FooterLogo from '../../assests/image/logo.png'
import HeaderItems from './HeaderItems'

const Header: React.FC<{}> = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <LogoImage
          imageUrl={FooterLogo}
          alt={'hgeader-logo'}
          align={'left'}
          width={45}
          height={45}
        />
        <HeaderLogoLabel>{'My Tennis Partners'}</HeaderLogoLabel>
      </HeaderLogo>
      <HeaderItems />
    </HeaderWrapper>
  )
}

export default Header
