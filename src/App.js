import React from 'react';
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';


const App = () => {
  return (
    <>
    <Navbar />

    <Route path = "/login">
      <Login />
    </Route>
    <Route path ="/Signup">
      <Signup />
    </Route>
    
  </>
  );
}

export default App;