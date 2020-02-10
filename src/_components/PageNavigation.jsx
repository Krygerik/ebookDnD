// @flow
import React from 'react'
import { Link } from 'react-router-dom'

type TPageNaavigation = {
  data: any,
  match: any,
  propertyKey: any,
}

export const PageNavigation = (props: TPageNaavigation) => {
  const { data, match, propertyKey } = props

  return (
    <div className="pageNavigation">
      {data.map((chapterData, index) => {
        const currentLink = location.hash.split(propertyKey).pop()
        const isActive = currentLink
          ? currentLink === '/' + chapterData.key
          : index === 0

        return (
          <Link to={`${match.url}/${chapterData.key}`} key={index}>
            <div
              className={`pageNavigation__link ${
                isActive ? 'pageNavigation__link--active' : ''
              }`}
            >
              {chapterData.name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}