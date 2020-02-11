// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Content } from '../../components/content'
import { type pageContentType } from '../../components/content'
import { withTabRouter } from '../../common/withTabRouter'
import { INTRODUCTION_PAGE } from './introduction-data'

type TInroductionContainer = {
  intoductionPage: pageContentType,
  match: { params: Object },
}

const InroductionContainer = (props: TInroductionContainer) => {
  const { intoductionPage, match } = props

  return <Content content={intoductionPage} tabKey={match.params.tabKey} />
}

const mapStateToProps = store => {
  return {
    intoductionPage: store.intoductionPage,
  }
}

const InroductionController = connect(mapStateToProps)(InroductionContainer)

export const IntroductionWithRouter = withTabRouter(
  InroductionController,
  INTRODUCTION_PAGE.URL
)
