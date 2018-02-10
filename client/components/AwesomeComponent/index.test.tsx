import * as React from 'react'
import { shallow } from 'enzyme'
import { AwesomeComponent } from './index'

test('renders without exploding', () => {
  const wrapper = shallow(<AwesomeComponent />)

  expect(wrapper.html()).toContain('Awesome')
})
