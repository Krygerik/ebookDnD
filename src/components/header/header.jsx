// @flow
import React from 'react'
import './header.scss'

export const Header = (props: { title: string }) => (
  <div className="header">
    <div className="col-3"></div>
    <div className="col-3">
      <h1>{props.title}</h1>
    </div>
    <div className="col-3"></div>
  </div>
)
