import { Instance } from './Instance'

export interface trialDTO {
  sickCd: string
  sickNm: string
}

export const getTrialsRequest = async (query: string) => {
  const { data } = await Instance.get<trialDTO[]>(`/sick?q=${query}`)
  console.info('calling api')

  return data
}
