// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import type { pageContentType } from '../page'
import { TabInfo } from '../tab-info'
import './content.scss'

type TContent = {
  content: pageContentType,
  tabKey?: string,
}

export const Content = (props: TContent) => {
  const { content, tabKey } = props
  const { TABS, URL } = content

  const isActive = key => (tabKey === key ? 'active' : '')

  return (
    <div className="pageContent">
      {TABS.length > 1 && (
        <div className="navigationTabs">
          {TABS.map(tab => (
            <Link
              className={`navigationTabs__item ${isActive(tab.TAB_KEY)}`}
              key={tab.TAB_KEY}
              to={`${URL}/${tab.TAB_KEY}`}
            >
              {tab.NAME}
            </Link>
          ))}
        </div>
      )}
      <TabInfo tabs={TABS} tabKey={tabKey} />
    </div>
  )
}
