import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DefaultTheme } from '../site-settings/material'
import PageLoader from '../components/Loader/page-loader'
import AppLayout from '../Layouts/AppLayout/applayout'
import { ToastContainer } from 'react-toastify'
//import providers
import { ThemeProvider } from 'styled-components'
import { PageProvider } from '../contexts/pageLoad/pageloader.provider'
//import style
import GlobalStyle from '../site-settings/global'
import { SentMessageProvider } from '../contexts/MessageSent/sentmessage.provider'
import 'react-responsive-modal/styles.css'
import 'react-toastify/dist/ReactToastify.css'

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
    })
  }, [])

  return (
    <ThemeProvider theme={DefaultTheme}>
      <PageProvider>
        <SentMessageProvider>
          <AppLayout>
            {loading ? <PageLoader /> : <Component {...pageProps} />}
          </AppLayout>
          <GlobalStyle />
          <ToastContainer />
        </SentMessageProvider>
      </PageProvider>
    </ThemeProvider>
  )
}
export default MyApp
