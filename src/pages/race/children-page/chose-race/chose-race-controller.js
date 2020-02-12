// @flow
import React from 'react'
import { Content } from '../../../../components/content'
import { withTabRouter } from '../../../../common/withTabRouter'
import { CHOSE_RACE_PAGE } from './chose-race-data'

const ChoseRaceContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Content content={CHOSE_RACE_PAGE} tabKey={match.params.tabKey} />
}

export const ChoseRaceWithTabRouter = withTabRouter(
  ChoseRaceContainer,
  CHOSE_RACE_PAGE.URL,
  false
)
