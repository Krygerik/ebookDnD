// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Page } from '@/components/page'
import type { navigationListPageType } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'

export const withNavigationRouter = (
  contentPage: navigationListPageType
) => () => (
  <Switch>
    <Route
      exact
      path={contentPage.URL}
      component={ChildContentWrapper(contentPage)}
    />
    {contentPage.LINKS.map(child => (
      <Route
        key={child.URL}
        path={child.URL}
        component={ChildController(child)}
      />
    ))}
  </Switch>
)

const ChildContentWrapper = content => props => (
  <Page content={content} tabKey={props.match && props.match.params.tabKey} />
)

const ChildController = childData => {
  if (childData.isNavigationPage) {
    return withNavigationRouter(childData)
  }

  return withTabRouter(ChildContentWrapper(childData), childData.URL)
}
