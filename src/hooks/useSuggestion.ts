import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import { getTrialsRequest, trialDTO } from '../apis/trial'

const useSuggestion = (query: string) => {
  const [suggestions, setSuggestions] = useState<trialDTO[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (query) {
      setIsLoading(true)
      getTrialsRequest(query)
        .then((data) => {
          setSuggestions(data)
        })
        .catch((e: AxiosError) => {
          alert(e.message)
        })
        .finally(() => setIsLoading(false))
    } else {
      setSuggestions([])
    }
  }, [query])

  return { suggestions, isLoading }
}

export default useSuggestion
