import { createContext, useContext } from 'react'

import { trialDTO } from '../apis/trial'

interface SearchContextType {
  isFocused: boolean
  setIsFocused: (isFocused: boolean) => void
  query: string
  setQuery: (query: string) => void
  suggestions: trialDTO[]
  selectedIdx: number
  selectIndexByKeyDown: (e: React.KeyboardEvent) => void
  selectedItem: trialDTO | null
}

export const SearchContext = createContext<SearchContextType | null>(null)

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (context === null) {
    throw Error('Context is null!')
  }
  return context
}
