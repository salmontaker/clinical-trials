import { useState, useEffect, PropsWithChildren, useRef } from 'react'

import { SearchContext, useSearchContext } from '../../contexts/SearchContext'
import useDebounce from '../../hooks/useDebounce'
import useSuggestion from '../../hooks/useSuggestion'

import * as S from './SearchProvider.styled'

const DEBOUNCE_DELAY_MS = 500

function SearchProvider({ children }: PropsWithChildren) {
  const [query, setQuery] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const debouncedQuery = useDebounce(query, DEBOUNCE_DELAY_MS)
  const suggestions = useSuggestion(debouncedQuery)

  useEffect(() => {
    setSelectedIdx(-1)
  }, [suggestions])

  return (
    <SearchContext.Provider value={{ query, setQuery, suggestions, selectedIdx, setSelectedIdx }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider

const KEY_ARROW_UP = 'ArrowUp'
const KEY_ARROW_DOWN = 'ArrowDown'
const KEY_ENTER = 'Enter'

function SearchBox() {
  const { setQuery, suggestions, selectedIdx, setSelectedIdx } = useSearchContext()

  const changeFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!e.nativeEvent.isComposing && suggestions.length > 0) {
      const startIdx = 0
      const endIdx = suggestions.length - 1

      if (e.key === KEY_ARROW_UP) {
        e.preventDefault()
        setSelectedIdx(selectedIdx > startIdx ? selectedIdx - 1 : endIdx)
      } else if (e.key === KEY_ARROW_DOWN) {
        e.preventDefault()
        setSelectedIdx(selectedIdx < endIdx ? selectedIdx + 1 : startIdx)
      } else if (e.key === KEY_ENTER) {
        e.currentTarget.value = suggestions[selectedIdx].sickNm
        setQuery(suggestions[selectedIdx].sickNm)
      }
    }
  }

  return <S.Input onChange={(e) => setQuery(e.target.value)} onKeyDown={changeFocus} />
}

function SearchSuggestion() {
  const { suggestions, selectedIdx } = useSearchContext()
  const selectedElement = useRef<HTMLLIElement>(null)

  useEffect(() => {
    selectedElement.current?.scrollIntoView({ block: 'center' })
  }, [selectedIdx])

  if (suggestions.length === 0) {
    return (
      <S.SuggestionWrapper>
        <S.SuggestionTitle>추천 검색어 없음</S.SuggestionTitle>
      </S.SuggestionWrapper>
    )
  }

  return (
    <S.SuggestionWrapper>
      <S.SuggestionTitle>추천 검색어</S.SuggestionTitle>
      <S.Ul>
        {suggestions.map((suggest, index) => (
          <S.Li
            key={suggest.sickCd}
            ref={selectedIdx == index ? selectedElement : null}
            selected={selectedIdx == index}
          >
            {suggest.sickNm}
          </S.Li>
        ))}
      </S.Ul>
    </S.SuggestionWrapper>
  )
}

SearchProvider.Box = SearchBox
SearchProvider.Suggestion = SearchSuggestion
