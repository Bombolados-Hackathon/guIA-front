import axios, { AxiosRequestConfig, Method } from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://giovanni:8000',
})

type MutatorParams = AxiosRequestConfig & { url: string; method: Method }

export const customMutator = ({ url, method, ...rest }: MutatorParams) => {
  return axiosInstance({
    url,
    method,
    ...rest,
  })
}
