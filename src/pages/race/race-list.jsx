// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import type { navigationListPageType } from '../chapter-list'

type TRaceListProps = {
  raceListPage: navigationListPageType,
  changeHeader: string => any,
}

export const RaceList = (props: TRaceListProps) => {
  const { raceListPage, changeHeader } = props

  return (
    <div className="navigationContent">
      {raceListPage.LINKS.map((link, index) => {
        if (link.URL) {
          return (
            <Link
              onClick={() => changeHeader(link.NAME)}
              className="link"
              key={index}
              to={link.URL}
            >
              {link.NAME}
            </Link>
          )
        } else {
          return (
            <span className="link" key={index}>
              {link.NAME} (TODO)
            </span>
          )
        }
      })}
    </div>
  )
}
