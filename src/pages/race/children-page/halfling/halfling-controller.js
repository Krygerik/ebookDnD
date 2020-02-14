// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { HALFLING_PAGE } from './halfling-data'

const HalflingContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={HALFLING_PAGE} tabKey={match.params.tabKey} />
}
export const HalflingWithRouter = withTabRouter(
  HalflingContainer,
  HALFLING_PAGE.URL
)
