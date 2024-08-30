"use client"
import { ThemeProvider } from '@emotion/react'
import theme from '@/theme'
import React from 'react'

function Provider({children}) {
  return (
    <>
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
    </>
  )
}

export default Provider