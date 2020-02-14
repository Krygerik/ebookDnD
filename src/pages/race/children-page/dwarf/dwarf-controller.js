// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { DWARF_PAGE } from './dwarf-data'

const DwarfContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={DWARF_PAGE} tabKey={match.params.tabKey} />
}
export const DwarfWithRouter = withTabRouter(DwarfContainer, DWARF_PAGE.URL)
