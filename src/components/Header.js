import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from 'actions'

class Header extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button
          onClick={() => this.props.changeAuth(false)}>Sign Out
        </button>

      )
    }
    return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>
          { this.renderButton() }
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(Header)