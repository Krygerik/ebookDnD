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
  const { TABS, URL, DESCRIPTION, image } = content

  return (
    <div className="pageContent">
      {TABS && (
        <div className="navigationTabs">
          {TABS.map(tab => (
            <Link
              className={`navigationTabs__item ${
                tabKey === tab.TAB_KEY ? 'active' : ''
              }`}
              key={tab.TAB_KEY}
              to={`${URL}/${tab.TAB_KEY}`}
            >
              {tab.NAME}
            </Link>
          ))}
        </div>
      )}
      {tabKey ? (
        TABS && <TabInfo tabs={TABS} tabKey={tabKey} />
      ) : (
        <div className={`description ${TABS ? 'with-tabs' : ''}`}>
          {image && image.map((img, i) => <img src={img} key={i} />)}
          {DESCRIPTION.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  )
}
