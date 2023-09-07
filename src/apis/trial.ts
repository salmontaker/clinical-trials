import { Instance } from './Instance'
import CacheRepository from '../store/CacheRepository'

const cacheRepository = new CacheRepository<trialDTO>()

export interface trialDTO {
  sickCd: string
  sickNm: string
}

export const getTrialsRequest = async (query: string) => {
  const cache = cacheRepository.get(query)

  if (cache && cache.expireTime > Date.now()) {
    return cache.data
  } else {
    const { data } = await Instance.get<trialDTO[]>(`/sick?q=${query}`)
    cacheRepository.set(query, data)

    console.info('calling api')

    return data
  }
}
