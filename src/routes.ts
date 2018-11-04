import { AwesomeComponent } from './client/components/AwesomeComponent'
import * as React from 'react'

export interface Route {
  path: string
  exact: boolean
  component: React.ComponentType
}

export const routes: ReadonlyArray<Route> = [
  { path: '/', exact: true, component: AwesomeComponent },
]
