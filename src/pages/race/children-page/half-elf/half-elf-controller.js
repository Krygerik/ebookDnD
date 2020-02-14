// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { HALF_ELF_PAGE } from './half-elf-data'

const HalfElfContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={HALF_ELF_PAGE} tabKey={match.params.tabKey} />
}
export const HalfElfWithRouter = withTabRouter(
  HalfElfContainer,
  HALF_ELF_PAGE.URL
)
