import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList';
import Header from 'components/Header';
import Root from 'Root'
import { changeAuth } from 'actions'

let wrapper

beforeEach(() => {
  wrapper = mount(
    <MemoryRouter>
      <Root>
        <App />
      </Root>
    </MemoryRouter>
  )
  changeAuth(true)
  wrapper.update()
})

it('shows a header', () => {
  expect(wrapper.find(Header).length).toEqual(1)
})

it('shows a comment list', () => {
  expect(wrapper.find(CommentList).length).toEqual(1)
})
