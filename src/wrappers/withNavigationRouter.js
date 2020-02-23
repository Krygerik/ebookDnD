// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Page } from '@/components/page'
import type { navigationListPageType } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'

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
        component={ChildController(child.DATA)}
      />
    ))}
  </Switch>
)

const ChildContentWrapper = content => props => (
  <Page content={content} tabKey={props.match && props.match.params.tabKey} />
)

const ChildController = childData => {
  if (childData.isNavigationPage) {
    return withNavigationRouter(ChildContentWrapper(childData), childData)
  }

  return withTabRouter(ChildContentWrapper(childData), childData.URL)
}
