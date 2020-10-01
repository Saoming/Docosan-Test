import React, { Component, Fragment } from 'react';
import Archive from "./components/archive"

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1> Danh sach cac bac si</h1>
        <Archive />
      </Fragment>
    );
  }
}

export default App;