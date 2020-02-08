// @flow
import React from 'react'

type THeaderProps = {
  title: string,
}

export const Header = (props: THeaderProps) => {
  const { title } = props

  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  )
}
