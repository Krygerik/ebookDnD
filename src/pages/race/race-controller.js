// @flow
import React from 'react'
import { Page } from '@/components/page'
import { RACE_LIST_PAGE } from './race-data'
import { withNavigationRouter } from '@/wrappers/withNavigationRouter'

const RaceListController = () => <Page content={RACE_LIST_PAGE} />

export const RaceListwithNavigationRouter = withNavigationRouter(
  RaceListController,
  RACE_LIST_PAGE
)
