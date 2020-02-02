// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { HashRouter } from 'react-router-dom'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    root
  )
}
