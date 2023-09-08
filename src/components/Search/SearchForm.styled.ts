import { styled } from 'styled-components'

import searchIcon from '../../assets/searchIcon.png'
import { flex } from '../../styles/constants/flex'
import { fontSizes } from '../../styles/constants/fontSize'

export const SearchForm = styled.form`
  ${flex.flexCenter}
  border: solid white;
  border-radius: 42px;
  background-color: white;
  width: 50%;

  &:focus-within {
    border-color: #007be9;
  }
`

export const SearchInput = styled.input`
  flex: 1;
  background-color: transparent;
  font-size: ${fontSizes.medium};
  padding: 20px;

  &::placeholder {
    color: gray;
  }
`

export const SearchButton = styled.button`
  background-color: #007be9;
  border-radius: 100%;
  padding: 10px 12px 10px 12px;
  margin-right: 12px;

  &:hover {
    cursor: pointer;
  }
`

export const SearchIcon = styled.img.attrs({ src: `${searchIcon}` })`
  width: 24px;
  height: 24px;
`
