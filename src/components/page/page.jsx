// @flow
import React from 'react'
import { Header } from '../header'
import { Content } from '../content'
import { NavigationContent } from '../navigation-content'
import type { navigationListPageType, pageContentType } from './page-type'

type TPage = {
  content: navigationListPageType | pageContentType,
  tabkey?: string,
}

export const Page = (props: TPage) => {
  const { content, tabkey } = props

  return (
    <div className="page">
      <Header title={content.TITLE} />
      <div className="pageBody">
        {content.isNavigationPage ? (
          <NavigationContent links={content.LINKS} />
        ) : (
          <Content content={content} tabKey={tabkey} />
        )}
      </div>
      <div className="footer"></div>
    </div>
  )
}
