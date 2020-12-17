import React from 'react'
import Home from './Home'
import Product from './Product'
import Register from './Register'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './Login';
import FirebaseLog from '../components/FirebaseLog';
function Navbar() {
    return (
            <Router>
      <div>
        <nav className='nav'>
          <ul>
            <li className='mainMenu'>
              <Link to="/">Home</Link>
            </li>
            <li className='mainMenu'>
              <Link className='mainMenu' to="/product">Product</Link>
            </li>
            <li className='mainMenu'>
              <Link className='mainMenu' to="/login">Login</Link>
            </li>
            <li className='mainMenu'>
              <Link className='mainMenu' to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            F=<FirebaseLog />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default Navbar
