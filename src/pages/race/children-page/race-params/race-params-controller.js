// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { RACE_PARAMS_PAGE } from './race-params-data'

const RaceParamsContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={RACE_PARAMS_PAGE} tabKey={match.params.tabKey} />
}
export const RaceParamsWithRouter = withTabRouter(
  RaceParamsContainer,
  RACE_PARAMS_PAGE.URL
)
