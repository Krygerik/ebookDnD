import React from "react";
import { useParams, useRouteMatch, Switch, Route } from "react-router-dom";
import { getRaceByKey } from "../content/model";
import { NavigationBar } from "./NavigationBar";
import { RaceProperty } from "./RaceProperty";
import { PageNavigation } from "./PageNavigation";
import "./ContentPage.css";

export const ContentPage = props => {
  const { key } = useParams();
  let match = useRouteMatch();
  const { name, data } = getRaceByKey(key);
  const { parrentUrl } = props;

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
              <RaceProperty raceData={data} />
            </Route>
          </Switch>
        </div>
      </div>
      <footer>
        <div></div>
      </footer>
    </div>
  );
};
