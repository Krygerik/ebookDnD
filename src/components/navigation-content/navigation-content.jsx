// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import type { pageLinkType } from '../page'

export const NavigationContent = (props: { links: Array<pageLinkType> }) => (
  <div className="navigationContent">
    {props.links.map((link, index) => {
      const { URL, TITLE } = link.DATA

      if (URL) {
        return (
          <Link className="link" key={index} to={URL}>
            {TITLE}
          </Link>
        )
      } else {
        return (
          <span className="link" key={index}>
            {TITLE} (TODO)
          </span>
        )
      }
    })}
  </div>
)
