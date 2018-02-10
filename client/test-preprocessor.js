const babelJest = require('babel-jest').createTransformer({
  compact: false,
  sourceMaps: 'inline'
})
const tsJest = require('ts-jest/preprocessor')

module.exports = {
  process: (src, path, config) => {
    const isTypeScript = path.endsWith('.ts') || path.endsWith('.tsx')
    const es6 = isTypeScript ? tsJest.process(src, path, config) : src
    es5 = babelJest.process(
      es6,
      isTypeScript ? path.replace(/tsx?$/, 'js') : path,
      config
    )

    // Update ts-jest's coverage cache if it's enabled
    if (
      '__ts_coverage__cache__' in global &&
      path in global.__ts_coverage__cache__.sourceCache
    ) {
      global.__ts_coverage__cache__.sourceCache[path] = es5
    }

    return es5
  }
}
