import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/home/index'
import Music from './components/music/index'
import About from './components/about/index'

const routing = (
  <Router>
    <Switch>
      {/* 
        Valid URLs:
        - / 
      */}
      <Route exact path="/" component={Home} />
      {/* 
        Valid URLs: 
        - /about 
      */}
      <Route path="/about" component={About} />
      {/* 
        Valid URLs:
        - /music/abc
        - /music/def
        - /music/xyz 
        */}
      <Route path="/music/:album" component={Music} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))
