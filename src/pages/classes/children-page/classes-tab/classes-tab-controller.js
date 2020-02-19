// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { CLASSES_PAGE } from './classes-tab-data'

const ClassesTabContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={CLASSES_PAGE} tabKey={match.params.tabKey} />
}

export const ChoseRaceWithTabRouter = withTabRouter(
  ClassesTabContainer,
  CLASSES_PAGE.URL,
  false
)
