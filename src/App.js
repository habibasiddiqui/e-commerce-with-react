import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from './pages/Home';
import Product from './pages/Product';
import FirebaseLog from './components/FirebaseLog';
import Signup from './pages/Signup';
import Welcome from "./pages/Welcome";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>

          <Route path="/signin">
            <FirebaseLog />
          </Route>

          <Route path='/signup' >
            <Signup />
          </Route>

          {/* <Route path="/products">
            <Product />
          </Route> */}

          <Route path='/welcome'>
            <Welcome />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
