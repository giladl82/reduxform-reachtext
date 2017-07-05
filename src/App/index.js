import React, { Component } from 'react';
import logo from './logo.svg';

import Form from '../Form'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(values) {
    alert(JSON.stringify(values))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <section className="App-intro">
          <Form onSubmit={this.handleSubmit} />
        </section>
      </div>
    );
  }
}

export default App;
