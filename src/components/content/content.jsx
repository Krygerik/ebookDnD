import React from 'react'
import { Link } from 'react-router-dom'
import type { pageContentType } from '../../pages/introduction'
import { TabInfo } from '../tab-info'
import './content.scss'

type TContent = {
  content: pageContentType,
  tabKey?: string,
}

export const Content = (props: TContent) => {
  const { content, tabKey } = props

  return (
    <div className="pageContent">
      <div className="navigationTabs">
        {content.TABS.map(tab => (
          <Link
            className={`navigationTabs__item ${
              tabKey === tab.TAB_KEY ? 'active' : ''
            }`}
            key={tab.TAB_KEY}
            to={`${content.URL}/${tab.TAB_KEY}`}
          >
            {tab.NAME}
          </Link>
        ))}
      </div>
      {tabKey ? (
        <TabInfo tabs={content.TABS} tabKey={tabKey} />
      ) : (
        <div className="description">
          {content.DESCRIPTION.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  )
}
