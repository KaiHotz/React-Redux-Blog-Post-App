import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import PostsIndex from '@/src/containers/Posts_index'
import PostsNew from '@/src/containers/Posts_new'
import PostsShow from '@/src/containers/Posts_show'

import '@/styles/styles.scss'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route path='/posts/new' component={PostsNew} />
        <Route path='/posts/:id' component={PostsShow} />
        <Route path='/' component={PostsIndex} />
      </Switch>
    )
  }
}

export default compose(
  withRouter
)(App)
