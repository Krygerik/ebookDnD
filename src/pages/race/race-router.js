// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { RaceListController } from './race-controller'
import { RACE_LIST_PAGE } from './race-data'

export const RaceRouter = () => {
  return (
    <Switch>
      <Route exact path={RACE_LIST_PAGE.URL} component={RaceListController} />
      {RACE_LIST_PAGE.LINKS.map((child, index) => (
        <Route key={index} path={child.URL} component={child.COMPONENT} />
      ))}
    </Switch>
  )
}
