import React, { Component } from "react";
import { linkData } from './linkData'
import {socialData} from './socialData'
import {items} from '../context/productData'

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialIcons:socialData,
    cart: [],
    cartItems:0,
    cartSubTotal:0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts:[],
    filteredProducts:[],
    featuredProducts:[],
    singleProduct: {},
    loading:false
  }

  componentDidMount(){
  // Datos de contentful 



    this.setProducts(items);
  }

  // setProducts datos locales "productData"
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    //  featured products
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  };


  // Funcion para el carrito de compara

  getStorageCart = () => {
    return [];
  }

  getStorageProduct = () => {
    return [];
  }

  getTotals = () => {

  }

  // Añade el total 
  addTotals = () =>{}

  // Sync Storage
  syncStorage = () => {}

// Añadir al carrito 

addToCart = (id) =>{
  let tempCart = [...this.state.cart]
  let tempProducts = [...this.state.storeProducts];
  let tempItem = tempCart.find(item => item.id === id)
  if(!tempItem){
    tempItem = tempProducts.find(item => item.id === id )
    let total = tempItem.price
    let cartItem = {...tempItem, count:1, total}
    tempCart = [...tempCart,cartItem]
  }
  else {
    tempItem.count++;
    tempItem.total = tempItem.price * tempItem.count
    tempItem.total = parseFloat(tempItem.total.toFixed(2));
  }

  this.setState(()=> {
    return {cart:tempCart}
  }, ()=> {
    this.addTotals()
    this.syncStorage()
    this.openCart()
  })
}

// Set single product 
setSingleProduct = (id) =>{
  console.log(`Seteado ${id}`);
}

// Cuando se abra el menu lateral
  handleSideBar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  }

  // Cuando se habra el carrito se cierra el menu

  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  }

  closeCart = () => {
    this.setState({cartOpen: false})
  }

  openCart = () => {
    this.setState({cartOpen: true})
  }


  render() {
    return (
      <ProductContext.Provider value={{
      ...this.state,  
      handleSideBar: this.handleSideBar,
      handleCart:this.handleCart,
      closeCart: this.closeCart,
      openCart: this.openCart,
      addToCart: this.addToCart,
      setSingleProduct: this.setSingleProduct

      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };