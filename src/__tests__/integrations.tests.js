import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'

import Root from 'Root'
import App from 'components/App'

let originalTimeout

beforeEach(() => {
  const sampleComments = [
    { name: "test 1" },
    { name: "test 2" },
    { name: "test 3" },
  ]
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: sampleComments
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of 3 comments & display them', (done) => {
  // Attempt to render the entire app
  const wrapper = mount(<Root><App /></Root>)

  // click "fetchComments" button
  wrapper.find('.fetch-comments').simulate('click')
  
  moxios.wait(() => {
    // expect to find an (unspecified length) list of comments
    wrapper.update()
    expect(wrapper.find('li').length).toEqual(3)
    done()
    wrapper.unmount()
  })
})