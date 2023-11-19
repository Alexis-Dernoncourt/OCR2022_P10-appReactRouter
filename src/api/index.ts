import logements from '../datas/logements.json'
import { ApiProps, LogementProps } from '../types/index'

// add random delay to simulate a real api
const random = Math.random() * 1000
export const delay = (ms: number = random) => new Promise(resolve => setTimeout(resolve, ms))

const fakeDatas = new Promise<ApiProps>((resolve, reject) => {
  try {
    resolve(logements)
  } catch (error) {
    reject(error)
  }
})

export const getLogements = async () => {
  try {
    await delay()
    const res = await fakeDatas
    return res
  } catch (error) {
    return error
  }
}

export const getLogementById = async (id: string) => {
  try {
    await delay()
    return await fakeDatas.then((data) => {
      const result = data.filter((item: LogementProps) => item.id === id)
      if (result?.length === 0) throw Error('Pas de résultat')
      return result[0]
    })
  } catch (error: any) {
    if (typeof error === 'object') {
      return error.message
    }
    return error
  }
}
