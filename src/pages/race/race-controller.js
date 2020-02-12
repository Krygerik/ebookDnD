// @flow
import React from 'react'
import { NavigationContent } from '../../components/navigation-content'
import { RACE_LIST_PAGE } from './race-data'
import { withNavigationRouter } from '../../wrappers/withNavigationRouter'

const RaceListController = () => (
  <NavigationContent contentPage={RACE_LIST_PAGE} />
)

export const RaceListwithNavigationRouter = withNavigationRouter(
  RaceListController,
  RACE_LIST_PAGE
)
