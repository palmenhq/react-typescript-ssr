import { compile } from 'handlebars'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { getLogger } from './logging'

const log = getLogger()

export const compileTemplate = (template: string): HandlebarsTemplateDelegate => {
  const location = resolve(__dirname, '..', 'resources', 'views', `${template}.hbs`)
  log(`Looking for template "${template}" in "${location}"`)
  const file = readFileSync(location)
  return compile(`${file}`)
}
