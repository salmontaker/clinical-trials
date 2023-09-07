import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import { getTrialsRequest, trialDTO } from '../apis/trial'

const useSuggestion = (query: string) => {
  const [suggestions, setSuggestions] = useState<trialDTO[]>([])

  useEffect(() => {
    if (query) {
      getTrialsRequest(query)
        .then((data) => {
          setSuggestions(data)
        })
        .catch((e: AxiosError) => {
          alert(e.message)
        })
    } else {
      setSuggestions([])
    }
  }, [query])

  return suggestions
}

export default useSuggestion
