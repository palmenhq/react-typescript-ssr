import * as React from 'react'
import { Middleware } from 'koa'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { HotApp } from '../../client/components/App'
import { getPublicAssetsPath } from '../helpers/assets'

export const getPage: Middleware = async ctx => {
  const stylesheet = new ServerStyleSheet()
  const html = renderToString(stylesheet.collectStyles(<HotApp />))

  ctx.type = 'html'
  ctx.body = `
<!DOCTYPE html>
<html>
<head>
<title>Hello</title>
<link href="/static/normalize.min.css" rel="stylesheet">
${stylesheet.getStyleTags()}
</head>
<body>
  <div id="app">${html}</div>
  <script>window.INITIAL_STATE = {}</script>
  <script src="${(await getPublicAssetsPath()).scriptLocation}"></script>
</body>  
</html>
`
}
