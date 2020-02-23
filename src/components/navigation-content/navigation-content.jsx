// @flow
import React from 'react'
import { Link } from 'react-router-dom'

export const NavigationContent = (props: {
  links: Array<any>,
  description?: Array<string>,
  image?: Array<string>,
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
      const { URL, TITLE } = link

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
