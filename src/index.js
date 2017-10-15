import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import configureStore from '@/src/store'
import App from '@/src/App'

const store = configureStore()
const history = createHistory()

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>
    , document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default
    render(App)
  })
}
