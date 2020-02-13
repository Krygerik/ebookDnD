// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import type { navigationListPageType } from '@/components/page'

export const withNavigationRouter = (
  component: any,
  navigationPage: navigationListPageType
) => () => (
  <Switch>
    <Route exact path={navigationPage.URL} component={component} />
    {navigationPage.LINKS.map(child => (
      <Route
        key={child.DATA.URL}
        path={child.DATA.URL}
        component={child.COMPONENT}
      />
    ))}
  </Switch>
)
