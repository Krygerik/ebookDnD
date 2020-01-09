import React, { Component } from "react";
import { CoverBook } from './CoverBook';
import { Content } from './Content';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isVisibleCover: false
    }
  }

  onClickCoverHandler = () => {
    this.setState({
      isVisibleCover: false
    })
  }

  render() {
    return (
      <div>
        { this.state.isVisibleCover 
            ? <CoverBook onClick={this.onClickCoverHandler} /> 
            : <Content /> 
        }
      </div>
    );
  }
}

export default App;
