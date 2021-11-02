import React from 'react'
import LogoImage from '../../components/LogoImage/logo-image'
import { FooterWrapper, FooterCopyRight } from './footer.styled'
import FooterLogo from '../../assests/image/logo.png'

const Footer: React.FC<{}> = () => {
  return (
    <FooterWrapper>
      <LogoImage
        imageUrl={FooterLogo}
        alt={'footer-logo'}
        align={'left'}
        width={30}
        height={28}
      />
      <FooterCopyRight>
        All rights reserved. Tennis {new Date().getFullYear()}
      </FooterCopyRight>
    </FooterWrapper>
  )
}

export default Footer
