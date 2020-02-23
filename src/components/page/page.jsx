// @flow
import React from 'react'
import { Redirect } from 'react-router-dom'
import { Header } from '../header'
import { Content } from '../content'
import { NavigationContent } from '../navigation-content'
import type { navigationListPageType, pageContentType } from './page-type'
import './page.scss'

type TPage = {
  content: navigationListPageType | pageContentType,
  tabKey?: string,
}

export const Page = (props: TPage) => {
  const { content, tabKey } = props

  return (
    <div className="page">
      <Header title={content.TITLE} parentUrl={content.parentUrl} />
      <div className="pageBody">
        {content.isNavigationPage ? (
          <NavigationContent
            links={content.LINKS}
            description={content.DESCRIPTION}
            image={content.image}
          />
        ) : tabKey ? (
          <Content content={content} tabKey={tabKey} />
        ) : (
          <Redirect to={content.URL + '/description'} />
        )}
      </div>
      <div className="footer"></div>
    </div>
  )
}
