import React, { Component } from "react";

export default class SearchArea extends Component {
  render() {
    return (
      <div>
        Search
        <input placeholder="Enter pokemon name" />
        <button>search pokemon</button>
      </div>
    );
  }
}
