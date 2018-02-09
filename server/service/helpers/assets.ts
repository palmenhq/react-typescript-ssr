import { readFile } from 'fs'
import * as path from 'path'
import config from '../../config'

export interface Assets {
  scriptLocation: string,
  styleLocation?: string,
}

export const getPublicAssetsPath = () => new Promise<Assets>((resolve) => {
  readFile(path.resolve(__dirname, '..', '..', 'public', 'stats.json'), (err, data) => {
    if (err) {
      resolve({
        scriptLocation: `${config.webpackHost}/app.js`
      })
      return
    }

    const result = JSON.parse(data.toString())
    const scriptLocation = `/static/${result.assetsByChunkName.app[0]}`
    const styleLocation = `/static/${result.assetsByChunkName.app[1]}`

    resolve({ scriptLocation, styleLocation })
  })
})
