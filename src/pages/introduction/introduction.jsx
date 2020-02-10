// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import type { pageContentType } from './introduction-data'
import { DEFAULT, TABLE } from './introduction-data'
import { Table } from '../../tables'
import './introduction.scss'

type TIntroduction = {
  pageContent: pageContentType,
  tabKey?: string,
}

export const Introduction = (props: TIntroduction) => {
  const { pageContent, tabKey } = props
  console.log('render intropage')

  if (!tabKey) {
    return (
      <div className="pageContent">
        <div className="navigationTabs">
          {pageContent.TABS.map(tab => (
            <Link
              className="navigationTabs__item"
              key={tab.TAB_KEY}
              to={`${pageContent.URL}/${tab.TAB_KEY}`}
            >
              {tab.NAME}
            </Link>
          ))}
        </div>
        <div className="description">
          {pageContent.DESCRIPTION.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="pageContent">
        <div className="navigationTabs">
          {pageContent.TABS.map(tab => (
            <Link
              className={`navigationTabs__item ${
                tabKey === tab.TAB_KEY ? 'active' : ''
              }`}
              key={tab.TAB_KEY}
              to={`${pageContent.URL}/${tab.TAB_KEY}`}
            >
              {tab.NAME}
            </Link>
          ))}
        </div>
        <div className="tab-info">
          {pageContent.TABS.filter(tab => tab.TAB_KEY === tabKey).map(tab =>
            tab.PARAGRAPHS.map((paraghrap, key) => {
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
              if (paraghrap.TYPE === TABLE) {
                return <Table key={key} tableKey={paraghrap.KEY} />
              }
            })
          )}
        </div>
      </div>
    )
  }
}
