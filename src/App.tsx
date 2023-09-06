import { ThemeProvider } from 'styled-components'

import SearchPage from './pages/SearchPage'
import Theme from './styles/base/DefaultTheme'
import GlobalStyle from './styles/base/GlobalStyle'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <SearchPage />
    </ThemeProvider>
  )
}

export default App
