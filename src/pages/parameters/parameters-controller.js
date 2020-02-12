// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { PARAMETERS_PAGE } from './parameters-data'

const ParametersContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={PARAMETERS_PAGE} tabKey={match.params.tabKey} />
}

export const ParametersWithTabRouter = withTabRouter(
  ParametersContainer,
  PARAMETERS_PAGE.URL
)
