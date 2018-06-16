import React from 'react'
import { mount } from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapper
let testComment1 = 'test comment 1'
let testComment2 = 'test comment 2'

beforeEach(() => {
  const initialState = {
    comments: [ testComment1, testComment2 ]
  }
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

it('should render one <li/> per comment', () => {
  expect(wrapper.find('li').length).toEqual(2)
})

it('should render the actual comment in the <li/>', () => {
  expect(wrapper.text()).toContain(testComment1)
  expect(wrapper.text()).toContain(testComment2)
})
