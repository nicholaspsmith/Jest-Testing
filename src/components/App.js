import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import requireAuth from './requireAuth'
import Header from 'components/Header'

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <Route path="/post" component={requireAuth(CommentBox)} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
}


export default App
