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
        <Route exact path={mainNavigationPage.urlPath}>
          <NavigationPage page={mainNavigationPage} />
        </Route>
        {allChapterData.map((chapter, index) => (
          <Route exact path={chapter.urlPath} key={index}>
            <NavigationPage
              page={chapter}
              parrentUrl={mainNavigationPage.urlPath}
            />
          </Route>
        ))}
        {allChapterData.map((chapter, index) => (
          <Route path={`${chapter.urlPath}/:key`} key={index}>
            <ContentPage parrentUrl={chapter.urlPath} />
          </Route>
        ))}
      </Switch>
    );
  }
}

export default App;
