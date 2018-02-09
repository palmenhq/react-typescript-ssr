import base from './base'
import dev from './dev'
import prod from './prod'
import test from './test'

export interface Config {
  nodeEnv: string,
  appEnv: string,
  port: number,
  webpackHost?: string,
}

export const configEnvironment = process.env.CONFIG_ENV || 'development'

let config: {}
switch (configEnvironment) {
  case 'development':
    config = dev

  case 'production':
    config = prod

  case 'test':
    config = test

  default:
    config = dev
}

export default {
  ...base,
  ...config,
} as Config
