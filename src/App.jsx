import React from 'react';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import About from './About';
import Books from './Books';
import Login from './Login';

const App = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Books></Books>      
      <About></About>
      <Login></Login>
    </div>
  );
};

export default App;