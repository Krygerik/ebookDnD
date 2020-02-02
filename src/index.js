// @flow
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter, Switch } from 'react-router-dom'
import { MainPageRoute } from './pages/chapter-list'
import { InroductionRoute } from './pages/introduction'
import { rootReducer } from './pages/rootReducer'
import './pages/common.scss'

const store = createStore(rootReducer)
const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Fragment>
          <Switch>
            <MainPageRoute />
            <InroductionRoute />
          </Switch>
        </Fragment>
      </HashRouter>
    </Provider>,
    root
  )
}
