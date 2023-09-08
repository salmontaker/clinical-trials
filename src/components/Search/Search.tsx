import { useState, PropsWithChildren } from 'react'

import SearchForm from './SearchForm'
import SearchSuggestion from './SearchSuggestion'
import { SearchContext } from '../../contexts/SearchContext'
import useDebounce from '../../hooks/useDebounce'
import useKeyboardNavigation from '../../hooks/useKeyboardNavigation'
import useSuggestion from '../../hooks/useSuggestion'

const DEBOUNCE_DELAY_MS = 500

function Search({ children }: PropsWithChildren) {
  const [isFocused, setIsFocused] = useState(false)

  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, DEBOUNCE_DELAY_MS)

  const suggestions = useSuggestion(debouncedQuery)
  const { selectedIdx, selectIndexByKeyDown, selectedItem } = useKeyboardNavigation(suggestions)

  return (
    <SearchContext.Provider
      value={{
        isFocused,
        setIsFocused,
        query,
        setQuery,
        suggestions,
        selectedIdx,
        selectIndexByKeyDown,
        selectedItem,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default Search

Search.Form = SearchForm
Search.Suggestion = SearchSuggestion
