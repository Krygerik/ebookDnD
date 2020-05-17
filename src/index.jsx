// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

const App = props => <React.Component>{props}</React.Component>

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(<App />, root)
}
