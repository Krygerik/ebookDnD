// @flow
import React from 'react'
import { Route } from 'react-router-dom'
import { Header } from './components/Header'
import type { pageContentDataType } from './introduction-data'

type TIntroduction = {
  pageContent: pageContentDataType,
}

export const Introduction = (props: TIntroduction) => {
  const { TITLE, KEY, DESCRIPTION } = props.pageContent

  return (
    <Route exac path={`/${KEY}`}>
      <div className="page">
        <Header title={TITLE} />
        <div className="pageBody">
          <div className="pageContent">
            {DESCRIPTION.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </Route>
  )
}
