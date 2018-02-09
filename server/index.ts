import 'source-map-support/register'

import config, { configEnvironment } from './config'
import { getLogger } from './utils/logging'
import { createApp } from './app'

const log = getLogger()

console.log(`Booting server 👢 (PORT ${config.port})
  - Config environment: "${configEnvironment}"
  - App environment: "${config.nodeEnv}"
  - Node environment: "${config.nodeEnv}"`)

const app = createApp()

app.listen(config.port, () => {
  log(`Server now listening on port ${config.port}`)
})
