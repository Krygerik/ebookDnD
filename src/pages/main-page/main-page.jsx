// @flow
import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { RouteList } from '../route-list/route-list'
import { Header } from './components'

export const MainPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="pageBody">
        <HashRouter>
          <Switch>
            <RouteList />
          </Switch>
        </HashRouter>
      </div>
      <div className="footer"></div>
    </div>
  )
}
