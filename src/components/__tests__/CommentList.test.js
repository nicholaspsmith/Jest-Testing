import React from 'react'
import { mount } from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'
import * as actions from 'actions'

let wrapper

beforeEach(() => {
  const initialState = {
    comments: [ "test comment 1", "test comment 2"]
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

// it('should render the actual comment in the <li/>', () => {
//   const testComment = "Test comment"
//   actions.saveComment(testComment)
// })