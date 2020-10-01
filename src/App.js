import React, { Component} from 'react';
import Archive from "./components/archive"

class App extends Component {
  render() {
    return (
      <>
        <h1> Danh sach cac bac si</h1>
        <Archive />
      </>
    );
  }
}

export default App;