import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#0E0D0D',
      '800': '#141212',
      '700': '#303030',
      '100': '#C9C8C8',
      '50': '#FFFFFF'
    }
  },
  fonts: {
    heading: 'Epilogue',
    body: 'Epilogue',
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
        color: 'gray.100',
      },
    },
  },
});
