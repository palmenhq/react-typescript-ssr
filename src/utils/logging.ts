import { LFService, LoggerFactoryOptions, LogGroupRule, LogLevel } from 'typescript-logging'
import { config } from '../config'

export const options = new LoggerFactoryOptions()
  .addLogGroupRule(new LogGroupRule(/.+/, LogLevel.fromString(config.logLevel)))

export const loggerFactory = LFService.createLoggerFactory(options)

export const appLogger = loggerFactory.getLogger('app')
