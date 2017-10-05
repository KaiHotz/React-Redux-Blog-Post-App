import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers'
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'

import '@/style/style.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(promise)
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/posts/new' component={PostsNew} />
        <Route path='/posts/:id' component={PostsShow} />
        <Route path='/' component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))
