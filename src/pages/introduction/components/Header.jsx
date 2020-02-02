// @flow
import React from 'react'

type THeader = {
  title: string,
}

export const Header = (props: THeader) => {
  const { title } = props

  return (
    <div className="header">
      <h1>{title}</h1>
      {/* <NavigationBar backUrl={parrentUrl} /> */}
    </div>
  )
}
