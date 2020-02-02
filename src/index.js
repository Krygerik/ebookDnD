// @flow
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter, Switch } from 'react-router-dom'
import { rootReducer, initialState, MainPage } from './pages/chapter-list'
import './pages/common.scss'

const store = createStore(rootReducer, initialState)
const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Fragment>
          <Switch>
            <MainPage />
          </Switch>
        </Fragment>
      </HashRouter>
    </Provider>,
    root
  )
}
