import React, { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(food_list);
  // Add item to cart
  const addToCart = (id) => {
    const product = products.find((item) => item._id === id);

    if (!product) return;

    const exists = cartItems.find((item) => item._id === id);

    if (!exists) {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item._id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };
   const addProduct=(product)=>{
    setProducts([...products,product]);
   }
    const removeProduct=(id)=>{
      const newProducts=products.filter((item)=>item._id!==id);
    setProducts(newProducts);
   }
  // Remove item from cart
  const removeFromCart = (id) => {
    const exists = cartItems.find((item) => item._id === id);

    if (!exists) return;

    if (exists.quantity === 1) {
      setCartItems(cartItems.filter((item) => item._id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };
  const deleteFromCart=(id)=>{
     const exists = cartItems.find((item) => item._id === id);
      setCartItems(cartItems.filter((item) => item._id !== id));
  }

  // Total number of items in cart
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const value = {
    products,
    addProduct,
    removeProduct,
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    deleteFromCart
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;