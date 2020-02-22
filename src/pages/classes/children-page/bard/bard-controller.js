// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { BARD_PAGE } from './bard-data'

const BardContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={BARD_PAGE} tabKey={match.params.tabKey} />
}

export const BardWithTabRouter = withTabRouter(
  BardContainer,
  BARD_PAGE.URL,
  false
)
