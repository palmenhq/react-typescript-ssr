import * as React from 'react'
import { injectGlobal } from 'emotion'

export const GlobalStyles: React.SFC = ({ children }) => {
  injectGlobal`
body {
  color: pink;
}
  `

  return <>{children}</>
}
