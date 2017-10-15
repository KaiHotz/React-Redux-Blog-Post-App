import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '@/src/store'
import App from '@/src/App'

const store = configureStore()

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
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
