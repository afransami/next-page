import React from 'react';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import About from './About';
import Books from './Books';
import Login from './Login';
import Headers from './Headers';
import Lottie from "lottie-react";


const App = () => {
  return (
    <div className='container mx-auto'>
     
      {/* header */}
      <Headers></Headers>
      <Outlet></Outlet>   
      


    </div>
  );
};

export default App;