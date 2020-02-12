// @flow
import React from 'react'
import { Content } from '../../components/content'
import { withTabRouter } from '../../common/withTabRouter'
import { PARAMETERS_PAGE } from './parameters-data'

const ParametersContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Content content={PARAMETERS_PAGE} tabKey={match.params.tabKey} />
}

export const ParametersWithTabRouter = withTabRouter(
  ParametersContainer,
  PARAMETERS_PAGE.URL
)
