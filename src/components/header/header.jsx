// @flow
import React from 'react'

export const Header = (props: { title: string }) => (
  <div className="header">
    <h1>{props.title}</h1>
  </div>
)
