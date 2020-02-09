// @flow
import React from 'react'
import type { pageContentType } from './introduction-data'
import { Link } from 'react-router-dom'
import './introduction.scss'

type TIntroduction = {
  pageContent: pageContentType,
  isNavigation: boolean,
  tabKey: string,
}

export const Introduction = (props: TIntroduction) => {
  const { pageContent, isNavigation, tabKey } = props
  console.log('render intropage')

  if (isNavigation) {
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
            tab.PARAGRAPHS.map(
              paraghrap =>
                paraghrap.VALUE &&
                paraghrap.VALUE.map((value, i) => (
                  <p key={i} className="paraghraph__value">
                    {value}
                  </p>
                ))
            )
          )}
        </div>
      </div>
    )
  }
}
