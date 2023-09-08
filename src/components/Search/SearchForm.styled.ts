import { styled } from 'styled-components'

import { fontSizes } from '../../styles/constants/fontSize'

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
