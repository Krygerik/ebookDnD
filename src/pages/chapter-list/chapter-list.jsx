// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { type chapterListPageType } from './chapter-list-data'
import './chapter-list.scss'

type TChapterListProps = {
  chapterListPage: chapterListPageType,
  changeHeader: string => any,
}

export const ChapterList = (props: TChapterListProps) => {
  const { chapterListPage, changeHeader } = props
  console.log('render chapterList')

  return (
    <div className="navigationContent">
      {chapterListPage.LINKS.map((link, index) => {
        if (link.URL) {
          return (
            <Link
              onClick={() => changeHeader(link.NAME)}
              className="link"
              key={index}
              to={link.URL}
            >
              {link.NAME}
            </Link>
          )
        } else {
          return (
            <span className="link" key={index}>
              {link.NAME} (TODO)
            </span>
          )
        }
      })}
    </div>
  )
}
