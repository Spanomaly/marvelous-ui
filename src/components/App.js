import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../actions/index";

import AddItemView from './AddItemView';
import LogView from './LogView';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const ConnectedApp = (props) => {
  useEffect(() => {
    props.fetchItems();
  },[]);
  return (
    <Router>
      <div className="App">
        <div id="Intro">
          <h1>Marvelous!</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
        </div>
        <Switch>
          <Route path="/log">
            <LogView />
          </Route>
          <Route path="/">
            <AddItemView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
const App = connect(
  null,
  { fetchItems }
)(ConnectedApp);

export default App;
