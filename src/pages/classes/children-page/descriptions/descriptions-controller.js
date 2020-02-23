// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { DESCRIPTIONS_PAGE } from './descriptions-data'

const DescriptionsContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={DESCRIPTIONS_PAGE} tabKey={match.params.tabKey} />
}

export const DescriptionsWithTabRouter = withTabRouter(
  DescriptionsContainer,
  DESCRIPTIONS_PAGE.URL
)
