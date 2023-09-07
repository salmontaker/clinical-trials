import { styled } from 'styled-components'

import { flex } from '../../styles/constants/flex'
import { fontSizes } from '../../styles/constants/fontSize'

export const Wrapper = styled.div`
  ${flex.flexColumnCenter}
  height: 100vh;
  background-color: #cae9ff;
  overflow: hidden;
`

export const Title = styled.div`
  text-align: center;
  line-height: 1.5;
  letter-spacing: -0.018em;
  font-size: ${fontSizes.large};
  font-weight: bold;
  margin-bottom: 64px;
`

export const Input = styled.input`
  width: 50%;
  border: solid white;
  border-radius: 42px;
  background-color: white;
  font-size: ${fontSizes.medium};
  padding: 20px;

  &:focus {
    border-color: #007be9;
  }

  &::placeholder {
    color: gary;
  }
`

export const SuggestionWrapper = styled.div`
  position: relative;
  margin-top: 24px;
  background-color: white;
  width: 50%;
  max-height: 50%;
  border-radius: 24px;
  padding: 24px;
`

export const SearchQuery = styled.div`
  margin-bottom: 16px;
  &:empty {
    margin: 0;
  }
`

export const SuggestionTitle = styled.div`
  font-size: ${fontSizes.small};
  font-weight: bold;
  color: gray;
`

export const SuggestionEmpty = styled.div`
  margin-top: 12px;
`

export const Ul = styled.ul`
  max-height: 90%;
  margin-top: 12px;
  overflow-y: auto;
`

export const Li = styled.li<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? 'aliceblue' : '')};
  padding-top: 12px;
  padding-bottom: 12px;
`
