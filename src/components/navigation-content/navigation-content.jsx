// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import type { pageLinkType } from '../page'

export const NavigationContent = (props: {
  links: Array<pageLinkType>,
  description?: Array<string>,
  image?: string,
}) => (
  <div className="navigationContent">
    {props.image && props.image.map((img, i) => <img src={img} key={i} />)}
    {props.description && (
      <div className={`description`}>
        {props.description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    )}
    {props.links.map((link, index) => {
      const { URL, TITLE } = link.DATA

      return URL ? (
        <Link className="link" key={index} to={URL}>
          {TITLE}
        </Link>
      ) : (
        <span className="link" key={index}>
          {TITLE} (TODO)
        </span>
      )
    })}
  </div>
)
