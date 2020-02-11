// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Content } from '../../components/content'
import { type pageContentType } from '../introduction'

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

export const ParametersController = connect(mapStateToProps)(
  ParametersContainer
)
