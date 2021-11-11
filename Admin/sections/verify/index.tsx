import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import PageLoader from '../../components/Loader/page-loader'
import { apiClientwithToken } from '../../utils/apiclient'
import { SentMessageContext } from '../../contexts/MessageSent/sentmessage.context'
const Verify: React.FC<{ token: string }> = ({ token }) => {
  const router = useRouter()
  const { loadDispatch } = useContext<any>(SentMessageContext)
  useEffect(() => {
    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .post('/users/verify', { token })
      .then((res) => {
        if (res.data.success) {
          if (res.data.type) {
            loadDispatch({ type: 'already' })
          } else {
            loadDispatch({ type: 'confirmed' })
          }
          router.push('/sent')
        }
      })
      .catch((err) => {
        loadDispatch({ type: 'error' })
        router.push('/sent')
      })
  }, [])

  return (
    <>
      <PageLoader />
    </>
  )
}

export default Verify
