import Search from '../components/Search/Search'

import * as S from '../components/Search/Search.styled'

function SearchPage() {
  return (
    <S.Wrapper>
      <S.Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </S.Title>
      <Search>
        <Search.Form />
        <Search.Suggestion />
      </Search>
    </S.Wrapper>
  )
}

export default SearchPage
