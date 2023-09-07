import SearchProvider from '../components/Search/SearchProvider'

import * as S from '../components/Search/SearchProvider.styled'

function SearchPage() {
  return (
    <S.Wrapper>
      <S.Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </S.Title>
      <SearchProvider>
        <SearchProvider.SearchBox />
        <SearchProvider.Suggestion />
      </SearchProvider>
    </S.Wrapper>
  )
}

export default SearchPage
