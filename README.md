# React-TypeScript-SSR

A scaffold for a React app built on TypeScript. Production ready and dev friendly out of the box.

## Dev mode

`yarn watch` to start server and webpack-dev-server. Access on `localhost:8080`. Note that
webpack-dev-server serves on port `8081` (or whatever you set the env var `WEBPACK_PORT` to) so it needs to be free as well.

## Prod mode

`yarn build` (builds both client and server) && `NODE_ENV=production yarn start` to start a production ready server with
the built client on port `8080` (or whatever you set the env var `PORT` to).

## Runtime (server) environment variables

  - `APP_ENV` - defaults to `development`, and controls i.e. which server config file to read. Options are
    `production`, `development` and `test`. Default `development`.
  - `PORT` - which port to run the node server on. Default `8080`.
  - `WEBPACK_PORT` - (dev only) What port to run webpack-dev-server-on. Default `8081`
  - `WEBPACK_HOST` - (dev only) Where webpack-dev-server is serving WITH trailing slash (so node server knows where to look). Default `http://localhost:8081/`.
  - Good ol' fashioned `NODE_ENV` ofc

## Testing

`yarn test`
