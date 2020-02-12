// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import type { pageLinkType } from '../page'

export const NavigationContent = (props: { links: Array<pageLinkType> }) => {
  const { links } = props

  return (
    <div className="navigationContent">
      {links.map((link, index) => {
        if (link.URL) {
          return (
            <Link className="link" key={index} to={link.URL}>
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
