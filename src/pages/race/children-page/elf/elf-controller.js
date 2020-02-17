// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { ELF_PAGE } from './elf-data'

const ElfContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={ELF_PAGE} tabKey={match.params.tabKey} />
}
export const ElfWithRouter = withTabRouter(ElfContainer, ELF_PAGE.URL)
