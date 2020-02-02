import React from 'react'
import { Route } from 'react-router-dom'
import { type chapterListPageType } from './chapter-list-data'
import { Header } from './components/Header'
import './chapter-list.scss'

export const MainPage = (props: chapterListPageType) => {
  const { title, url, links } = props.mainPage

  return (
    <Route exac path={url}>
      <div className="page">
        <Header title={title} />
        <div className="pageBody">
          <div className="pageContent">
            {links.map((link, index) => (
              <a className="link" key={index}>
                {link.name} {!link.key ? '(TODO)' : null}
              </a>
            ))}
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </Route>
  )
}
