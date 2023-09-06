import { AxiosError } from 'axios'
import { useState, useEffect, PropsWithChildren, useRef } from 'react'

import { getTrialsRequest, trialDTO } from '../../apis/trial'
import {
  DEBOUNCE_DELAY_MS,
  EXPIRE_TIME,
  SearchContext,
  useSearchContext,
} from '../../contexts/SearchContext'
import useDebounce from '../../hooks/useDebounce'

import * as S from './SearchProvider.styled'

interface SuggestionCache {
  value: trialDTO[]
  expireTime: number
}

function SearchProvider({ children }: PropsWithChildren) {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, DEBOUNCE_DELAY_MS)

  const [suggestions, setSuggestions] = useState<trialDTO[]>([])
  const [cache, setCache] = useState<Record<string, SuggestionCache>>({})
  const [selectedIdx, setSelectedIdx] = useState(-1)

  useEffect(() => {
    const NOW = Date.now()

    if (!debouncedQuery) {
      setSuggestions([])
      setSelectedIdx(-1)
      return
    }

    if (cache[debouncedQuery] && cache[debouncedQuery].expireTime > NOW) {
      setSuggestions(cache[debouncedQuery].value)
      setSelectedIdx(-1)
      return
    }

    getTrialsRequest(debouncedQuery)
      .then((data) => {
        setSuggestions(data)
        setCache((prev) => ({
          ...prev,
          [debouncedQuery]: {
            value: data,
            expireTime: NOW + EXPIRE_TIME,
          },
        }))
        setSelectedIdx(-1)
      })
      .catch((e: AxiosError) => {
        alert(e.message)
      })
  }, [debouncedQuery])

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

  return <S.Input onChange={(e) => setQuery(e.target.value)} onKeyDown={changeFocus} />
}

function SearchSuggestion() {
  const { query, suggestions, selectedIdx } = useSearchContext()
  const selectedElement = useRef<HTMLLIElement>(null)

  useEffect(() => {
    selectedElement.current?.scrollIntoView({ block: 'center' })
  }, [selectedIdx])

  if (query === '') {
    return <div></div>
  }

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
