import { createContext, useContext } from 'react'

import { trialDTO } from '../apis/trial'

interface SearchContextType {
  query: string
  setQuery: (query: string) => void
  suggestions: trialDTO[]
  selectedIdx: number
  setSelectedIdx: (idx: number) => void
}

export const SearchContext = createContext<SearchContextType | null>(null)

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (context === null) {
    throw Error('Context is null!')
  }
  return context
}

export const DEBOUNCE_DELAY_MS = 250
export const MINUTE_IN_MILLISECONDS = 60000
export const EXPIRE_TIME = MINUTE_IN_MILLISECONDS * 1
