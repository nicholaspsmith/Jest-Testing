import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'
import Root from 'Root'

let wrapper

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
)
})

afterEach(() => {
  wrapper.unmount()
})

it('shows a textarea and 2 buttons', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
  expect(wrapper.find('button').length).toEqual(2)
})

describe('textarea', () => {
  let testComment = 'Test comment'
  beforeEach(() => {
    const event = {
      target: {
        value: testComment
      }
    }
    wrapper.find('textarea').simulate('change', event)
    wrapper.update() // force re-render (jsdom does not render upon state change)
  })

  it('allows a user to enter text in textarea', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual(testComment)
  })
  
  it('empties the text area when form is submitted', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual(testComment)
    wrapper.find('form').simulate('submit')
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
  })
  
})
