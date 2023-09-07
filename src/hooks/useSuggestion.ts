import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import { getTrialsRequest, trialDTO } from '../apis/trial'
import CacheRepository from '../store/CacheRepository'

const cacheRepository = new CacheRepository<trialDTO>()

const useSuggestion = (query: string, setIdx: (idx: number) => void) => {
  const [suggestions, setSuggestions] = useState<trialDTO[]>([])

  useEffect(() => {
    const setData = (data: trialDTO[]) => {
      setSuggestions(data)
      setIdx(-1)
    }

    if (!query) {
      setData([])
    } else {
      const cache = cacheRepository.get(query)

      if (cache && cache.expireTime > Date.now()) {
        setData(cache.data)
      } else {
        getTrialsRequest(query)
          .then((data) => {
            setData(data)
            cacheRepository.set(query, data)
          })
          .catch((e: AxiosError) => {
            alert(e.message)
          })
      }
    }
  }, [query])

  return suggestions
}

export default useSuggestion
