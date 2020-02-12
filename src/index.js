// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ChapterList } from '@/pages/chapter-list'
import './index.scss'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(
    <HashRouter>
      <ChapterList />
    </HashRouter>,
    root
  )
}
