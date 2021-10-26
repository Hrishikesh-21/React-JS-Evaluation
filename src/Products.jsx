import React from "react";

const items = [
  {
    id: 1,
    name: "iphone12  ",
    price: 120000,
    description:"Smart phone"
  },
  {
    id: 2,
    name: "Oneplus  ",
    price: 55000,
    description:"Android phone"
  },
  {
    id: 3,
    name: "Sony  ",
    price: 51000,
    description:"Sony OS"
  },
];

const Products = () => {
  const [cart, setCart] = React.useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsToBuy = () => items.map((item) => (
    <div key={item.id}>
      {`${item.name}: ${item.price}  => ${item.description}`}
      <button type="submit" onClick={() => addToCart(item)}>Add</button>
    </div>
  ));

  const listItemsInCart = () => items.map((item) => (
    <div key={item.id}>
      ({amountOfItems(item.id)} x Rs{item.price}) {`${item.name}`}
      <button type="submit" onClick={() => removeFromCart(item)}>   Remove</button>
    </div>
  ));

  return (
    <div>
      STORE
      <div>{listItemsToBuy()}</div>
      <br/><br/>
      <div>CART</div>
      <br/>
      <div>{listItemsInCart()}</div>
      <br/>
      <div>Total: Rs{cartTotal}</div>
      <div>
        <button onClick={() => setCart([])}>Clear</button>
      </div>
    </div>
  );
};

export default Products;