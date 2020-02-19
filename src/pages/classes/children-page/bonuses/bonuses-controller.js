// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { BONUSES_PAGE } from './bonuses-data'

const BonusesContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={BONUSES_PAGE} tabKey={match.params.tabKey} />
}

export const BonusesWithTabRouter = withTabRouter(
  BonusesContainer,
  BONUSES_PAGE.URL,
  false
)
