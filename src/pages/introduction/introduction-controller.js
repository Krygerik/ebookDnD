// @flow
import React from 'react'
import { Introduction } from './introduction'
import { connect } from 'react-redux'
import type { pageContentDataType } from './introduction-data'

type TInroductionContainer = {
  intoductionPage: pageContentDataType,
}

const InroductionContainer = (props: TInroductionContainer) => {
  const { intoductionPage } = props

  return <Introduction pageContent={intoductionPage} />
}

const mapStateToProps = store => {
  return {
    intoductionPage: store.intoductionPage,
  }
}

export const InroductionController = connect(mapStateToProps)(
  InroductionContainer
)
