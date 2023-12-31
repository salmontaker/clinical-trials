import styled from 'styled-components'

import { fontSizes } from '../../styles/constants/fontSize'

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
  max-height: 85%;
  margin-top: 12px;
  padding-right: 12px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #007be9;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: aliceblue;
    border-radius: 10px;
  }
`

export const Li = styled.li<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? 'aliceblue' : '')};
  padding-top: 12px;
  padding-bottom: 12px;
`
