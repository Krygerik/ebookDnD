// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '@/common/rootReducer'
import '@/common/common.scss'
import { MainPage } from './pages/main-page'

const store = createStore(rootReducer)
const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <MainPage />
    </Provider>,
    root
  )
}
