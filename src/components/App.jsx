import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavigationPage } from "./NavigationPage";
import { getMainNavigation, getAllChapters } from "../content/model";
import { ContentPage } from "./ContentPage";
import "./App.css";

class App extends Component {
  render() {
    const mainNavigationPage = getMainNavigation();
    const allChapterData = getAllChapters();

    return (
      <Switch>
        <Route
          exact
          path={mainNavigationPage.urlPath}
          render={props => (
            <NavigationPage {...props} page={mainNavigationPage} />
          )}
        />
        {allChapterData.map((chapter, index) => (
          <Route
            exact
            path={chapter.urlPath}
            key={index}
            render={props => (
              <NavigationPage
                {...props}
                page={chapter}
                parrentUrl={mainNavigationPage.urlPath}
              />
            )}
          />
        ))}
        {allChapterData.map((chapter, index) => (
          <Route
            path={`${chapter.urlPath}/:key`}
            key={index}
            render={props => (
              <ContentPage {...props} parrentUrl={chapter.urlPath} />
            )}
          />
        ))}
      </Switch>
    );
  }
}

export default App;
