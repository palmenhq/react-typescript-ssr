import * as React from 'react'
import { injectGlobal } from 'emotion'

export const GlobalStyles: React.SFC = ({ children }) => {
  injectGlobal`
body {
font-family: sans-serif;
padding: 0;
margin: 0;
}
  `

  return <>{children}</>
}
