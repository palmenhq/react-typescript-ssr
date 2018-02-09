import { compileTemplate } from '../../utils/views'
import { Context } from 'koa'
import { getPublicAssetsPath } from '../helpers/assets';

const renderPage = compileTemplate('page')

export const getPage = async (ctx: Context) => {
  ctx.type = 'html'
  ctx.body = renderPage({
    assets: await getPublicAssetsPath(),
    initialState: JSON.stringify({}),
  })
}
