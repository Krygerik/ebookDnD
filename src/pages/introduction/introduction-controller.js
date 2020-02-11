// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Content } from '../../components/content'
import { type pageContentType } from './introduction-data'

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

export const InroductionController = connect(mapStateToProps)(
  InroductionContainer
)
