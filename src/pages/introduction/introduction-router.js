import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { INTRODUCTION_PAGE_DATA } from './introduction-data'
import { InroductionController } from './introduction-controller'

export const IntroductionRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path={INTRODUCTION_PAGE_DATA.URL}
        component={InroductionController}
      />
      <Route
        path={`${INTRODUCTION_PAGE_DATA.URL}/:tabKey`}
        component={InroductionController}
      />
    </Switch>
  )
}
