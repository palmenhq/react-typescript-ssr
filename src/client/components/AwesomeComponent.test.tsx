import * as React from 'react'
import { mount } from 'enzyme'
import { AwesomeComponent } from './AwesomeComponent'

test('renders without 💥', () => {
  mount(
    <AwesomeComponent />
  )
})
