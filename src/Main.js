import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Sandwiches from "./Sandwiches";
import Coffee from "./Coffee";
import './index.css';

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <div className="logo">
          <h1>DUNKIN'</h1>
          </div>
          <ul className="header">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/sandwiches">SANDWICHES</NavLink></li>
            <li><NavLink to="/coffee">COFFEE</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home} />
             <Route path="/sandwiches" component={Sandwiches} />
             <Route path="/coffee" component={Coffee} />
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;