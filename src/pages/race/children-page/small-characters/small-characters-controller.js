// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { SMALL_CHARACTERS_PAGE } from './small-characters-data'

const SmallCharactersContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={SMALL_CHARACTERS_PAGE} tabKey={match.params.tabKey} />
}
export const SmallCharactersWithRouter = withTabRouter(
  SmallCharactersContainer,
  SMALL_CHARACTERS_PAGE.URL
)
