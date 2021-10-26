

import React from "react";

function EditProduct() {
    return(
<>
<p>hii</p>
</>

  );
}

export default EditProduct;





import React, { useState } from 'react'
import "./App.css"

function App() {

  const [cart, setCart] = useState([]);

  const [products]=useState([
    {
      name:"AA Battery",
      cost:"20Rs",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5-QAul_NfAs-s0XW9M087xWyPOGWvbfYjmqSl0QXabZRSYoid47i7kISiAteyIh0YOci5mtQ&usqp=CAc",

    },
    {
      name:"Blanket",
      cost:"200Rs",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
      
    },


  ]);

  const addToCart=(product)=>{
    console.log('we are in cart');
    setCart([...cart,product]);
  
  };

  return (
    <>

    <div className="App">
      <header><button>Go To Cart({cart.length})</button></header>
      <h1>Products</h1>

      <div className="products">


      {products.map((product ,idx)=>(
        
        
        <div className="productimage" 
        key={idx}>
        <h1>{product.name}</h1>
        <h1>{product.cost}</h1>
        <img src={product.image} alt="image"/>
        <button onClick={()=>   addToCart (product)}>Add To Cart</button>
        </div>

      





      ))}
      </div>
        <div>



      
        


      </div>












    </div>
    </>
  )


  
}

export default App