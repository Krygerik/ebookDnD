// @flow
import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { NavigationBar } from './NavigationBar'
import './NavigationPage.css'

type TNavigationPage = {
  page: any,
  parrentUrl?: string,
}

export const NavigationPage = (props: TNavigationPage) => {
  const { title, links, isKeyNavigation, urlPath } = props.page
  const { parrentUrl } = props

  if (links.length === 1) {
    const { key, keyProperty, link } = links[0]
    if (isKeyNavigation) {
      return <Redirect to={`${urlPath}/${key}/${keyProperty}`} />
    } else {
      return <Redirect to={link} />
    }
  }

  return (
    <div className="page">
      <header>
        <div>
          <h1>{title}</h1>
          <NavigationBar backUrl={parrentUrl} />
        </div>
      </header>
      <div className="pageBody">
        <div className="navigationBook">
          {isKeyNavigation
            ? links.map(navLink => (
                <Link
                  to={`${urlPath}/${navLink.key}/${navLink.keyProperty}`}
                  key={navLink.key}
                >
                  {navLink.name}
                </Link>
              ))
            : links.map(navLink => (
                <Link to={navLink.link} key={navLink.link}>
                  {navLink.name}
                </Link>
              ))}
        </div>
      </div>
      <footer>
        <div></div>
      </footer>
    </div>
  )
}
