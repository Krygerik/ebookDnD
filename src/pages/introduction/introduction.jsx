// @flow
import React from 'react'
import type { pageContentDataType } from './introduction-data'

type TIntroduction = {
  pageContent: pageContentDataType,
}

export const Introduction = (props: TIntroduction) => {
  const { DESCRIPTION } = props.pageContent
  console.log('render intropage')

  return (
    <div className="pageContent">
      {DESCRIPTION.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  )
}
