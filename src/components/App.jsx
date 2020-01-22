import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavigationPage } from "./NavigationPage";
import { getMainNavigation, getRaceNavigation } from "../content/model";
import { ContentPage } from "./ContentPage";
import "./App.css";

class App extends Component {
  render() {
    const mainNavigationPage = getMainNavigation();
    const raceNavigationPage = getRaceNavigation();

    return (
      <Switch>
        <Route
          exact
          path={mainNavigationPage.urlPath}
          render={props => (
            <NavigationPage {...props} page={mainNavigationPage} />
          )}
        />
        <Route
          exact
          path={raceNavigationPage.urlPath}
          render={props => (
            <NavigationPage {...props} page={raceNavigationPage} />
          )}
        />
        <Route
          path={`${raceNavigationPage.urlPath}/:key`}
          component={ContentPage}
        />
      </Switch>
    );
  }
}

export default App;
