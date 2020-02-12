// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import type { navigationListPageType } from './navigation-content-controller'

type TNavigationContentProps = {
  contentPage: navigationListPageType,
  changeHeader: Function,
}

export const NavigationContent = (props: TNavigationContentProps) => {
  const { contentPage, changeHeader } = props

  return (
    <div className="navigationContent">
      {contentPage.LINKS.map((link, index) => {
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
