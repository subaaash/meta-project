
import React from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Menu from './Menu';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';


function App() {
  return (
    <>
    <Nav/>
    <Main/>
    <Menu/>
    <Testimonials/>
    <About/>
    <Footer/>
    </>
  );
}

export default App;
