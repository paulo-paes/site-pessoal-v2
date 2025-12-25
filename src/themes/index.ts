import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const colors = {
  brand: {
    light: {
      primary: '#FFF',
      secondary: '#000',
    },
    dark: {
      primary: '#000',
      secondary: '#FFF',
    },
    teste: '#569088',
  },
}

const fonts = {
  body: '"JetBrains Mono", monospace',
  heading: '"JetBrains Mono", monospace',
  mono: '"JetBrains Mono", monospace',
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, fonts, colors })

export default theme
