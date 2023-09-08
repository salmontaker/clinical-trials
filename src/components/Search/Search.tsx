import { useState, useEffect, PropsWithChildren } from 'react'

import SearchForm from './SearchForm'
import SearchSuggestion from './SearchSuggestion'
import { SearchContext } from '../../contexts/SearchContext'
import useDebounce from '../../hooks/useDebounce'
import useSuggestion from '../../hooks/useSuggestion'

const DEBOUNCE_DELAY_MS = 500

function Search({ children }: PropsWithChildren) {
  const [isFocused, setIsFocused] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const debouncedQuery = useDebounce(query, DEBOUNCE_DELAY_MS)
  const suggestions = useSuggestion(debouncedQuery)

  useEffect(() => {
    setSelectedIdx(-1)
  }, [suggestions])

  return (
    <SearchContext.Provider
      value={{ isFocused, setIsFocused, query, setQuery, suggestions, selectedIdx, setSelectedIdx }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default Search

Search.Form = SearchForm
Search.Suggestion = SearchSuggestion
