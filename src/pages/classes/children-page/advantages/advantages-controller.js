// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { ADVANTAGES_PAGE } from './advantages-data'

const AdvantagesContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={ADVANTAGES_PAGE} tabKey={match.params.tabKey} />
}

export const AdvantagesWithTabRouter = withTabRouter(
  AdvantagesContainer,
  ADVANTAGES_PAGE.URL,
  false
)
