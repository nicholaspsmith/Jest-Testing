import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'

let wrapper

beforeEach(() => {
  wrapper = mount(<CommentBox />)
})

afterEach(() => {
  wrapper.unmount
})

it('shows a textarea and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})

it('allows a user to enter text in textarea', () => {
  const event = {
    target: {
      value: 'Test comment'
    }
  }
  wrapper.find('textarea').simulate('change', event)
  // force re-render (does not detect state change)
  wrapper.update()
  
  expect(wrapper.find('textarea').prop('value')).toEqual('Test comment')
})
