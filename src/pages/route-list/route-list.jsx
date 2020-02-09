// @flow
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { ChapterList, CHAPTER_LIST_PAGE } from '../chapter-list'

export const RouteList = () => {
  return (
    <Fragment>
      <Route exact path={CHAPTER_LIST_PAGE.URL}>
        <ChapterList />
      </Route>
      {CHAPTER_LIST_PAGE.LINKS.map((route, index) => (
        <Route key={index} path={route.URL} component={route.COMPONENT} />
      ))}
    </Fragment>
  )
}
