// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'

export const withTabRouter = (
  WrappedComponent: any,
  url: string,
  hasTabs: boolean = true
) => () => (
  <Switch>
    <Route exact path={url} component={WrappedComponent} />
    {hasTabs && <Route path={`${url}/:tabKey`} component={WrappedComponent} />}
  </Switch>
)
