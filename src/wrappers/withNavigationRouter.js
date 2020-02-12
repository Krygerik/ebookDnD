// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'

export const withNavigationRouter = (
  component: any,
  navigationPage: any
) => () => (
  <Switch>
    <Route exact path={navigationPage.URL} component={component} />
    {navigationPage.LINKS.map(child => (
      <Route key={child.URL} path={child.URL} component={child.COMPONENT} />
    ))}
  </Switch>
)
