import React, { Component } from "react";
import coverBook from '../assets/coverBook.jpg';
import '../styles/CoverBook.css';

export class CoverBook extends Component {
  render() {
    return (
      <div className="coverBook" onClick={this.props.onClick}>
        <img src={coverBook} />
      </div>
    );
  }
}
