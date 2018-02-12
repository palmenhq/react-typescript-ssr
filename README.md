# React-TypeScript-starter

A scaffold for a React app built on TypeScript. Production ready and dev friendly out of the box.
Includes the [nebula css](https://github.com/NebulaUI/nebula-css) framework.

## Dev mode

`yarn watch` to start server and webpack-dev-server. Access on `localhost:8080`. Note that
webpack-dev-server serves on port `8081` (or whatever you set the env var `CLIENT_DEV_PORT` to) so it needs to be free as well.

## Prod mode

`yarn build` (builds both client and server) && `yarn start` to start a production ready server with
the built client on port `8080` (or whatever you set the env var `PORT` to).

## Runtime (server) environment variables

  - `APP_ENV` - defaults to `development`, and controls i.e. which server config file to read. Options are
    `production`, `development` and `test`. Default `development`.
  - `PORT` - which port to run the node server on. Default `8080`.
  - `CLIENT_DEV_PORT` - (dev only) What port to run webpack-dev-server-on. Default `8081`
  - `WEBPACK_HOST` - (dev only) Where webpack-dev-server is serving (so node server knows where to look). Default `http://localhost:8081`.
  - Good ol' fashioned `NODE_ENV` ofc

## Testing

To test both the client and the server - run `yarn test`. To test only one - run `yarn server:test` or `yarn client:test`.
