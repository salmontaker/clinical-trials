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
  font-size: ${fontSizes.large};
  font-weight: bold;
  margin-bottom: 64px;
`

export const Input = styled.input`
  width: 50%;
  border-radius: 42px;
  background-color: white;
  font-size: ${fontSizes.medium};
  padding: 24px;
`

export const SuggestionWrapper = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  margin-top: 24px;
  background-color: white;
  width: 50%;
  max-height: 50%;
  border-radius: 42px;
  padding: 24px;
  overflow-y: auto;
`

export const SuggestionTitle = styled.div`
  font-size: ${fontSizes.small};
  font-weight: bold;
  color: gray;
`

export const Ul = styled.ul`
  margin-top: 12px;
`

export const Li = styled.li<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? 'aliceblue' : '')};
  padding-top: 12px;
  padding-bottom: 12px;
`
