import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import About from './pages/AboutPage'
import Products from './pages/Products'
import Contact from './pages/ContactPage'
import SingleProducts from './pages/SingleProduct'
import Cart from './pages/CartPage'
import Default from './pages/Default'


import {Route, Switch} from 'react-router-dom'

import NavBar from './Components/NavBar'
import SideNab from './Components/SideBar'
import SideCart from './Components/SideCart'
import Footer from './Components/Footer'


function App() {
  return (
    <>
    <NavBar/>
    <SideNab/>
    <SideCart/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/info" component={About}/>
        <Route path="/productos" exact component={Products}/>
        <Route path="/contactos" component={Contact}/>
        <Route path="/productos/:id" component={SingleProducts}/>
        <Route path="/carrito" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
