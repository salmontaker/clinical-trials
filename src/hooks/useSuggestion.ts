import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import { getTrialsRequest, trialDTO } from '../apis/trial'
import { EXPIRE_TIME } from '../contexts/SearchContext'

interface SuggestionCache {
  value: trialDTO[]
  expireTime: number
}

const useSuggestion = (query: string, setIdx: (idx: number) => void) => {
  const [suggestions, setSuggestions] = useState<trialDTO[]>([])
  const [cache, setCache] = useState<Record<string, SuggestionCache>>({})

  useEffect(() => {
    const NOW = Date.now()

    if (!query) {
      setSuggestions([])
      setIdx(-1)
      return
    }

    if (cache[query] && cache[query].expireTime > NOW) {
      setSuggestions(cache[query].value)
      setIdx(-1)
      return
    }

    getTrialsRequest(query)
      .then((data) => {
        setSuggestions(data)
        setCache((prev) => ({
          ...prev,
          [query]: {
            value: data,
            expireTime: NOW + EXPIRE_TIME,
          },
        }))
        setIdx(-1)
      })
      .catch((e: AxiosError) => {
        alert(e.message)
      })
  }, [query])

  return suggestions
}

export default useSuggestion
