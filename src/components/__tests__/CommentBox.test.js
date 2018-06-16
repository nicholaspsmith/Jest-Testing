import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'

it('shows a text area and a button', () => {
  const wrapper = mount(<CommentBox />)

  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(1)
})