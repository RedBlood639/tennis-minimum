import axios from 'axios'
const url: string = process.env.NEXT_PUBLIC_SERVER_API_ENDPOINT || ''

export const apiClientwithToken = (token: any) => {
  const apiClient = axios.create({
    baseURL: url,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
  return apiClient
}
