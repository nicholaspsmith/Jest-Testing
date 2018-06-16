import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'

const initialState = {}

export default (props) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {props.children}
    </Provider>
  )
}