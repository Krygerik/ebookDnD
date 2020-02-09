// @flow
import React from 'react'
import { useParams, useRouteMatch, Switch, Route } from 'react-router-dom'
import { getSubChapterByKey } from '../content/model'
import { NavigationBar } from './NavigationBar'
import { UnitProperty } from './UnitProperty'
import { PageNavigation } from './PageNavigation'
import './ContentPage.css'

type TContentPage = {
  parrentUrl: ?string,
}

export const ContentPage = (props: TContentPage) => {
  const { key } = useParams()
  let match = useRouteMatch()
  const { name, data } = getSubChapterByKey(key)
  const { parrentUrl } = props

  return (
    <div className="page">
      <header>
        <div>
          <h1>{name}</h1>
          <NavigationBar backUrl={parrentUrl} />
        </div>
      </header>
      <div className="pageBody">
        <PageNavigation data={data} match={match} propertyKey={key} />
        <div className="pageContent">
          <Switch>
            <Route path={`${match.path}/:propertyKey`}>
              <UnitProperty unitData={data} />
            </Route>
          </Switch>
        </div>
      </div>
      <footer>
        <div></div>
      </footer>
    </div>
  )
}
