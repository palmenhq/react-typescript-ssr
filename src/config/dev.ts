export default {
  webpackHost: process.env.WEBPACK_HOST || `http://localhost:${process.env.WEBPACK_PORT || 8081}/`,
}
