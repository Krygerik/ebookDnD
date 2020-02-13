// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

export const Header = (props: { title: string, parentUrl?: string }) => (
  <div className="header">
    <div className="col-3">
      {location.hash !== '#/' && (
        <Link to={'/'}>
          <button className="btn">К содержанию</button>
        </Link>
      )}
    </div>
    <div className="col-3">
      <h1>{props.title}</h1>
    </div>
    <div className="col-3">
      {props.parentUrl && (
        <Link to={props.parentUrl}>
          <button className="btn">Назад</button>
        </Link>
      )}
    </div>
  </div>
)
