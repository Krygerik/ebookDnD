import React, { Component } from "react";
import headerImage from "../assets/headerPage.png";
import footerImage from "../assets/footerPage.png";
import { Switch, Route } from "react-router-dom";
import { MainNavigationPage } from "./MainNavigationPage";
import { RaceNavigationPage } from "./RaceNavigationPage";
import { RacePage } from "./RacePage";
import "./PageBook.css";

export class PageBook extends Component {
  render() {
    return (
      <div className="page">
        <header>
          <div className="container">
            <img src={headerImage}></img>
          </div>
        </header>
        <div className="container mainContent">
          <Switch>
            <Route exact path="/" component={MainNavigationPage} />
            <Route exact path="/race" component={RaceNavigationPage} />
            <Route path="/race/:key" component={RacePage} />
          </Switch>
        </div>
        <footer>
          <div className="container">
            <img src={footerImage}></img>
          </div>
        </footer>
      </div>
    );
  }
}
