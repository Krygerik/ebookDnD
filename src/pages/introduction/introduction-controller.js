// @flow
import React from 'react'
import { Content } from '@/components/content'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { INTRODUCTION_PAGE } from './introduction-data'

const InroductionContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Content content={INTRODUCTION_PAGE} tabKey={match.params.tabKey} />
}
export const IntroductionWithRouter = withTabRouter(
  InroductionContainer,
  INTRODUCTION_PAGE.URL
)
