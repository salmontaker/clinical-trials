import { useEffect, useRef } from 'react'

import { useSearchContext } from '../../contexts/SearchContext'

import * as S from './SearchSuggestion.styled'

function SearchSuggestion() {
  const { isFocused, query, suggestions, isLoading, selectedIdx } = useSearchContext()
  const selectedElement = useRef<HTMLLIElement>(null)

  useEffect(() => {
    selectedElement.current?.scrollIntoView({ block: 'center' })
  }, [selectedIdx])

  if (isFocused) {
    return (
      <S.SuggestionWrapper>
        <S.SearchQuery>{query}</S.SearchQuery>
        <S.SuggestionTitle>추천 검색어</S.SuggestionTitle>
        {suggestions.length > 0 ? (
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
        ) : (
          <S.SuggestionEmpty>{isLoading ? '불러오는중' : '추천 검색어 없음'}</S.SuggestionEmpty>
        )}
      </S.SuggestionWrapper>
    )
  } else {
    return <></>
  }
}

export default SearchSuggestion
