import axios from 'axios'
import { LogementProps } from '../types'

const baseUrl = "http://localhost:5000"

// add random delay to simulate a real api
const random = Math.random() * 1000
export const delay = (ms: number = random) => new Promise(resolve => setTimeout(resolve, ms))

const api = axios.create({ baseURL: baseUrl })
export const urlEndpoint = "/logements"

export const getLogements = async (url: string) => {
  await delay()
  const response = await api.get(url)
  return response.data as LogementProps[]
}

export const getLogementById = async (url: string) => {
  await delay()
  const response = await api.get(url)
  return response.data as LogementProps
}
