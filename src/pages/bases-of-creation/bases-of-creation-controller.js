// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Content } from '../../components/content'
import { type pageContentType } from '../../components/content'
import { withTabRouter } from '../../common/withTabRouter'
import { BASES_OF_CREATION } from './bases-of-creation-data'

type TBasesOfCreation = {
  basesOfCreationPage: pageContentType,
  match: { params: Object },
}

const BasesOfCreationContainer = (props: TBasesOfCreation) => {
  const { basesOfCreationPage, match } = props

  return <Content content={basesOfCreationPage} tabKey={match.params.tabKey} />
}

const mapStateToProps = store => {
  return {
    basesOfCreationPage: store.basesOfCreationPage,
  }
}

const BasesOfCreationController = connect(mapStateToProps)(
  BasesOfCreationContainer
)

export const BasesOfCreationWithTabRouter = withTabRouter(
  BasesOfCreationController,
  BASES_OF_CREATION.URL
)
