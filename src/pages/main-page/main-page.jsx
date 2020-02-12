// @flow
import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { ChapterList } from '../chapter-list'
import { Header } from '../../components/header'

export const MainPage = () => {
  return (
    <div className="page">
      <Header />
      <div className="pageBody">
        <HashRouter>
          <Switch>
            <ChapterList />
          </Switch>
        </HashRouter>
      </div>
      <div className="footer"></div>
    </div>
  )
}
