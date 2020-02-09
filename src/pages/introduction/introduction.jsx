// @flow
import React from 'react'
import type { pageContentType } from './introduction-data'
import './introduction.scss'

type TIntroduction = {
  pageContent: pageContentType,
}

export const Introduction = (props: TIntroduction) => {
  const { DESCRIPTION, TABS } = props.pageContent
  console.log('render intropage')

  return (
    <div className="pageContent">
      <div className="navigationTabs">
        {TABS.map(tab => (
          <p className="navigationTabs__item" key={tab.TAB_KEY}>
            {tab.NAME}
          </p>
        ))}
      </div>
      <div className="description">
        {DESCRIPTION.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  )
}
