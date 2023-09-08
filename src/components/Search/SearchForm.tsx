import { useEffect } from 'react'

import { useSearchContext } from '../../contexts/SearchContext'

import * as S from './SearchForm.styled'

function SearchForm() {
  const { setIsFocused, setQuery, selectIndexByKeyDown, selectedItem } = useSearchContext()

  useEffect(() => {
    if (selectedItem) setQuery(selectedItem.sickNm)
  }, [selectedItem])

  return (
    <S.Input
      placeholder="질환명을 입력해 주세요"
      value={selectedItem?.sickNm}
      onBlur={() => setIsFocused(false)}
      onChange={(e) => setQuery(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onKeyDown={(e) => selectIndexByKeyDown(e)}
    />
  )
}

export default SearchForm
