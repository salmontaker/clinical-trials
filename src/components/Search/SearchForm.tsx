import { useSearchContext } from '../../contexts/SearchContext'

import * as S from './SearchForm.styled'

const KEY_ARROW_UP = 'ArrowUp'
const KEY_ARROW_DOWN = 'ArrowDown'
const KEY_ENTER = 'Enter'

function SearchForm() {
  const { setIsFocused, setQuery, suggestions, selectedIdx, setSelectedIdx } = useSearchContext()

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

  return (
    <S.Input
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={changeFocus}
      placeholder="질환명을 입력해 주세요"
    />
  )
}

export default SearchForm
