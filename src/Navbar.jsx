import React from "react";
import {  Route, Link } from "react-router-dom";
import EditProduct from './EditProduct';
import Products from './Products';
import Login from './Login';
import  "./App.css";

function Navbar() {
    return(
<div className="Navbar">
 
  <li><Link to="/Login">login</Link><br></br>  </li>
   <li> <Link to="/Products">Products</Link><br></br></li>
  <li> <Link to="/EditProduct">EditProduct</Link><br></br> </li>
   

   <div className="router">
    <Route path="/Login" component={Login}/><br></br>
    <Route path="/Products" component={Products}/><br></br>
    <Route path="/EditProduct" component={EditProduct}/><br></br>
    </div>
   </div>
    )

}
export default Navbar;