import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/noto-sans-tc/index.css'


const theme = extendTheme({
  colors: {
     blue: {
      600: '#3175FA'
    }
  },
  fonts: {
    heading:  `'Noto Sans TC', sans serif`,
    body: `'Noto Sans TC', sans serif`
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={true}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
