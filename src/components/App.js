import React, { Component } from "react";
import { CoverBook } from './CoverBook';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isVisibleCover: true
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
            ? <CoverBook onClick={this.onClickCoverHandler}/> 
            : <div></div> 
        }
      </div>
    );
  }
}

export default App;
