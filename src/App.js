import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Upload from './components/Upload';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Upload}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
