// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { BASES_OF_CREATION } from './bases-of-creation-data'

const BasesOfCreationContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={BASES_OF_CREATION} tabKey={match.params.tabKey} />
}

export const BasesOfCreationWithTabRouter = withTabRouter(
  BasesOfCreationContainer,
  BASES_OF_CREATION.URL
)
