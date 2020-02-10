// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import type { pageContentType } from '../introduction'
import { DEFAULT, TABLE } from '../introduction'
import { Table } from '../../tables'

type TParameters = {
  content: pageContentType,
  tabKey?: string,
}

export const Parameters = (props: TParameters) => {
  const { content, tabKey } = props

  if (!tabKey) {
    return (
      <div className="pageContent">
        <div className="navigationTabs">
          {content.TABS.map(tab => (
            <Link
              className="navigationTabs__item"
              key={tab.TAB_KEY}
              to={`${content.URL}/${tab.TAB_KEY}`}
            >
              {tab.NAME}
            </Link>
          ))}
        </div>
        <div className="description">
          {content.DESCRIPTION.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    )
  } else {
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
        <div className="tab-info">
          {content.TABS.filter(tab => tab.TAB_KEY === tabKey).map(tab =>
            tab.PARAGRAPHS.map((paraghrap, key) => {
              if (paraghrap.TYPE === TABLE) {
                return <Table key={key} tableKey={paraghrap.KEY} />
              }
              if (paraghrap.TYPE === DEFAULT) {
                return (
                  <div className="paragraph" key={key}>
                    <div className="paragraph__label">{paraghrap.LABEL}</div>
                    {paraghrap.VALUE &&
                      paraghrap.VALUE.map((value, i) => (
                        <p key={i} className="paragraph__value">
                          {value}
                        </p>
                      ))}
                  </div>
                )
              }
            })
          )}
        </div>
      </div>
    )
  }
}
