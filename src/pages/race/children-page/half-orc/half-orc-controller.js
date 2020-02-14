// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { HALF_ORC_PAGE } from './half-orc-data'

const HalfOrcContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={HALF_ORC_PAGE} tabKey={match.params.tabKey} />
}
export const HalfOrcWithRouter = withTabRouter(
  HalfOrcContainer,
  HALF_ORC_PAGE.URL
)
