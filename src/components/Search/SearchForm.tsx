import { useEffect } from 'react'

import { useSearchContext } from '../../contexts/SearchContext'

import * as S from './SearchForm.styled'

function SearchForm() {
  const { setIsFocused, setQuery, selectIndexByKeyDown, selectedItem } = useSearchContext()

  useEffect(() => {
    if (selectedItem) setQuery(selectedItem.sickNm)
  }, [selectedItem])

  return (
    <S.SearchForm
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      onKeyDown={(e) => selectIndexByKeyDown(e)}
    >
      <S.SearchInput
        placeholder="질환명을 입력해 주세요"
        value={selectedItem?.sickNm}
        onChange={(e) => setQuery(e.target.value)}
      />
      <S.SearchButton>
        <S.SearchIcon />
      </S.SearchButton>
    </S.SearchForm>
  )
}

export default SearchForm
