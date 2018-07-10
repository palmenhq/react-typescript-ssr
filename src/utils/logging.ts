import * as debug from 'debug'

export const getLogger = (space: string = 'info') => debug(`app:${space}`)
