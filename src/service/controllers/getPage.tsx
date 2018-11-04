import * as React from 'react'
import { Middleware } from 'koa'
import { renderToString } from 'react-dom/server'
import { HotApp } from '../../client/components/App'
import { getPublicAssetsPath } from '../helpers/assets'
import { renderStylesToString } from 'emotion-server'
import { StaticRouter, StaticRouterContext } from 'react-router'

export const getPage: Middleware = async (ctx) => {
  const routerContext: StaticRouterContext = {}
  const html = renderStylesToString(
    renderToString(
      <StaticRouter location={ctx.request.originalUrl} context={routerContext}>
        <HotApp />
      </StaticRouter>,
    ),
  )

  if (routerContext.url) {
    ctx.redirect(routerContext.url)
    return
  }

  ctx.type = 'html'
  ctx.body = `
<!DOCTYPE html>
<html>
<head>
<title>Hello</title>
</head>
<body>
  <div id="app">${html}</div>
  <script>window.INITIAL_STATE = {}</script>
  <script src="${(await getPublicAssetsPath()).scriptLocation}"></script>
</body>  
</html>
`
}
