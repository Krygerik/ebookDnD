// @flow
import React from 'react'
import { Page } from '@/components/page'
import { withTabRouter } from '@/wrappers/withTabRouter'
import { GNOME_PAGE } from './gnome-data'

const GnomeContainer = (props: { match: { params: Object } }) => {
  const { match } = props

  return <Page content={GNOME_PAGE} tabKey={match.params.tabKey} />
}
export const GnomeWithRouter = withTabRouter(GnomeContainer, GNOME_PAGE.URL)
