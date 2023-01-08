import React from 'react';
import './scss/main.scss';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;