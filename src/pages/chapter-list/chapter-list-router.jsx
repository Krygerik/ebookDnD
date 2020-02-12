// @flow
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import { ChapterListController } from './chapter-list-controller'
import { CHAPTER_LIST_PAGE } from './chapter-list-data'

export const ChapterListRouter = () => {
  return (
    <Fragment>
      <Route exact path={CHAPTER_LIST_PAGE.URL}>
        <ChapterListController />
      </Route>
      {CHAPTER_LIST_PAGE.LINKS.map((route, index) => (
        <Route key={index} path={route.URL} component={route.COMPONENT} />
      ))}
    </Fragment>
  )
}
