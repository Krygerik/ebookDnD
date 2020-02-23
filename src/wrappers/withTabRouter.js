// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'

export const withTabRouter = (WrappedComponent: any, url: string) => () => (
  <Switch>
    <Route exact path={url} component={WrappedComponent} />
    <Route path={`${url}/:tabKey`} component={WrappedComponent} />
  </Switch>
)
