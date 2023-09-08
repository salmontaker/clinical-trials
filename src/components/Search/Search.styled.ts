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
