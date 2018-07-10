import { readFile } from 'fs'
import * as path from 'path'
import { config } from '../../config'

export interface Assets {
  scriptLocation: string,
}

export const getPublicAssetsPath = () => new Promise<Assets>((resolve, reject) => {
  if (process.env.NODE_ENV !== 'production') {
    resolve({ scriptLocation: `${config.webpackHost}app.js` })
    return
  }
  readFile(path.resolve(process.cwd(), 'build/static/stats.json'), (err, data) => {
    if (err) {
      reject(err)
      return
    }

    const result = JSON.parse(data.toString())
    const scriptLocation = `/static/${result.assetsByChunkName.app[0]}`

    resolve({ scriptLocation })
  })
})
