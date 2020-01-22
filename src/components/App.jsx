import React, { Component } from "react";
import { CoverBook } from "./CoverBook";
import { PageBook } from "./PageBook";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isVisibleCover: false
    };
  }

  onClickCoverHandler = () => {
    this.setState({
      isVisibleCover: false
    });
  };

  render() {
    return (
      <div>
        {this.state.isVisibleCover ? (
          <CoverBook onClick={this.onClickCoverHandler} />
        ) : (
          <PageBook />
        )}
      </div>
    );
  }
}

export default App;
