import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Epilogue',
    body: 'Epilogue',
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.50',
        color: 'gray.900',
      },
    },
  },
});
