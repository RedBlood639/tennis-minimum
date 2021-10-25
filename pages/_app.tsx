import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DefaultTheme } from '../site-settings/material'
import PageLoader from '../components/Loader/page-loader'
import AppLayout from '../Layouts/AppLayout/applayout'
//import providers
import { ThemeProvider } from 'styled-components'
import { PageProvider } from '../contexts/pageLoad/pageloader.provider'
//import style
import GlobalStyle from '../site-settings/global'
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      setLoading(true)
    })
    Router.events.on('routeChangeComplete', () => {
      setLoading(false)
    })
    Router.events.on('routeChangeError', (err) => {
      setLoading(false)
      console.log(`error===>>${err}`)
    })
  }, [])

  return (
    <ThemeProvider theme={DefaultTheme}>
      <PageProvider>
        <AppLayout>
          {loading ? <PageLoader /> : <Component {...pageProps} />}
        </AppLayout>
        <GlobalStyle />
      </PageProvider>
    </ThemeProvider>
  )
}
export default MyApp
