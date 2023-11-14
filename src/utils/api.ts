import logements from '../datas/logements.json'
import { ApiProps } from '../types'

// add random delay to simulate a real api
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const random = Math.random() * 1000

export const fakeDatas = new Promise<ApiProps | null>((resolve, reject) => {
  delay(random).then(() => {
    resolve(logements)
  }).catch(e => reject(e))
})

export const fetchApiDatas = async () => {
  try {
    return await fakeDatas
  } catch (error) {
    console.error("Error (fetchData):", error)
  }
}
