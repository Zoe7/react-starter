import React from 'react'
import { CSSReset, ThemeProvider, Box } from '@chakra-ui/core'

export const ThemeDecorator = ({ children }) => (
  <ThemeProvider>
    <>
      <CSSReset />
      <Box w="100%" p={4}>
        {children}
      </Box>
    </>
  </ThemeProvider>
)
