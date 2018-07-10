import 'source-map-support/register'

import { config, configEnvironment } from './config'
import { appLogger } from './utils/logging'
import { createApp } from './app'

appLogger.info(`Booting server 👢 (PORT ${config.port})
  - Config environment: "${configEnvironment}"
  - App environment: "${config.appEnv}"
  - Node environment: "${config.nodeEnv}"`)

const app = createApp()

app.listen(config.port, () => {
  appLogger.info(`Server now listening on port ${config.port}`)
})
