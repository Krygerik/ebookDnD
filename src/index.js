// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { CHAPTER_LIST_PAGE } from '@/pages/chapter-list'
import { withNavigationRouter } from '@/wrappers/withNavigationRouter'
import './index.scss'

const root = document.getElementById('root')

const ChapterListController = withNavigationRouter(CHAPTER_LIST_PAGE)

if (root !== null) {
  ReactDOM.render(
    <HashRouter>
      <ChapterListController />
    </HashRouter>,
    root
  )
}
