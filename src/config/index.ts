import base from './base'
import dev from './dev'
import prod from './prod'
import test from './test'

export interface Config {
  nodeEnv: string
  appEnv: 'development' | 'production' | 'test'
  webpackHost?: string
  port: number
  logLevel: string
}

export const configEnvironment = base.appEnv

let baseConfig: {}
switch (configEnvironment) {
  case 'development':
    baseConfig = dev

  case 'production':
    baseConfig = prod

  case 'test':
    baseConfig = test

  default:
    baseConfig = dev
}

export const config = {
  ...base,
  ...baseConfig,
} as Config
