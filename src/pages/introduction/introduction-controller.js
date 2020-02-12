// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { INTRODUCTION_PAGE } from './introduction-data'

const InroductionContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={INTRODUCTION_PAGE} tabKey={match.params.tabKey} />
}
export const IntroductionWithRouter = withTabRouter(
  InroductionContainer,
  INTRODUCTION_PAGE.URL
)
