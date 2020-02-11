// @flow
import React from 'react'
import { connect } from 'react-redux'
import { type pageContentType } from '../../components/content'
import { Content } from '../../components/content'
import { withTabRouter } from '../../common/withTabRouter'
import { PARAMETERS_PAGE } from './parameters-data'

type TParametersContainer = {
  parametersPage: pageContentType,
  match: { params: Object },
}

const ParametersContainer = (props: TParametersContainer) => {
  const { parametersPage, match } = props

  return <Content content={parametersPage} tabKey={match.params.tabKey} />
}

const mapStateToProps = store => {
  return {
    parametersPage: store.parametersPage,
  }
}

const ParametersController = connect(mapStateToProps)(ParametersContainer)

export const ParametersWithTabRouter = withTabRouter(
  ParametersController,
  PARAMETERS_PAGE.URL
)
