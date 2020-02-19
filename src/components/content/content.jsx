// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from '@/tables'
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
          {DESCRIPTION.map((desc, index) => {
            if (desc.isTable) {
              return <Table key={index} tableKey={desc.KEY} />
            }

            return (
              <div className="paragraph" key={index}>
                {desc.LABEL && (
                  <div className="paragraph__label">{desc.LABEL}</div>
                )}
                {desc.VALUE &&
                  desc.VALUE.map((descValue, i) => (
                    <div className="paragraph__value" key={i}>
                      {descValue}
                    </div>
                  ))}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
