import React, { Component } from 'react';
import Navbar from './Navbar';
import Editor from './Editor';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Editor />
      </div>
    );
  }
}

export default App;
