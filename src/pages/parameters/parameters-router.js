// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PARAMETERS_PAGE } from './parameters-data'
import { ParametersController } from './parameters-controller'

export const ParametersRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path={PARAMETERS_PAGE.URL}
        component={ParametersController}
      />
      <Route
        path={`${PARAMETERS_PAGE.URL}/:tabKey`}
        component={ParametersController}
      />
    </Switch>
  )
}
