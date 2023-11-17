import { Html, Head, Main, NextScript } from 'next/document'
import ThemeContextProvider, { ThemeContext } from '../../context/ThemeContext'
import React, {useContext} from 'react'

export default function Document() {
  const theme = useContext(ThemeContext);
  return (
    <Html suppressHydrationWarning lang="en">
      <Head />
      <body>
        <ThemeContextProvider>
          <Main />
          <NextScript />
        </ThemeContextProvider>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
