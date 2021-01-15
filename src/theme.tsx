import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        overflowX: 'hidden',
      },
    },
  },
})

export default theme
