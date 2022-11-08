import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3222',
})
instance.interceptors.request.use((config: any) => {
  if (config) {
    config.headers.Authorization = window.localStorage.getItem('token')
  }
  return config
})

export default instance
