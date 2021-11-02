import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import { LayoutWrapper, LayoutContent } from './applayout.style'

const AppLayout: React.FC<{}> = (props: any) => {
  return (
    <LayoutWrapper>
      <Header />
      <LayoutContent>{props.children}</LayoutContent>
      <Footer />
    </LayoutWrapper>
  )
}

export default AppLayout
