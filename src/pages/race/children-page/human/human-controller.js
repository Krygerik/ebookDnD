// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { HUMAN_PAGE } from './human-data'

const HumanContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={HUMAN_PAGE} tabKey={match.params.tabKey} />
}
export const HumanWithRouter = withTabRouter(HumanContainer, HUMAN_PAGE.URL)
