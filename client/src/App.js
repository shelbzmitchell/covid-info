import React, { Component } from "react";

import Home from "./components/Home";
import {
  BrowserRouter as Router,

} from "react-router-dom";

class App extends Component {


render() {
  console.log()
  return (
    <Router>
    <Home />
    </Router>
  )
}
}
export default App;
