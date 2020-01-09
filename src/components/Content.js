import React, { Component } from "react";
import headerImage from '../assets/headerPage.png';
import footerImage from '../assets/footerPage.png';
import leftSideImage from '../assets/leftSide.png';
import '../styles/Page.css';

export class Content extends Component {
  render() {
    return (
      <div className="page">
        <header>
          <div className="container">
            <img src={headerImage}></img>
          </div>
        </header>
        <div className="main">
          <div className="container">
            <img src={leftSideImage}></img>
          </div>
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
