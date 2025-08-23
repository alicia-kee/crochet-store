/*"shared storage" for cart items that every page can access and use functions to edit cart*/
import { createContext, useState, useContext } from "react";

const CartContext = createContext(); //empty box to hold cart data

//CartProvider is a component that fills "box"
// accepts special prop "children", anything wrapped inside <CartProvider> ... </CartProvider> will gets passed here
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); // array of products (cartItems is current data, setCartItems is function to update data)

  // adds a new product ("item") to cart
  const addToCart = (item) => { 
    setCartItems((prev) => [...prev, item]);
    //prev is previous cart state, [...prev, item] makes a new array with all old items plus the new one at the end.
  };

  // removes product by its index (position in array)
  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index)); //loops through all items, removes item at index
  };

  // clear all items in cart
  const clearCart = () => {
    setCartItems([]); // wipes the cart
  };


  // share data with whole app
  // prev is previous cart state, [...prev, item] makes a new array with all old items plus the new one at the end
  // value={{ ... }} is what gets shared *carItems is array of current items in cart
  // {children} so so child components can access *everything inside tags)
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
}

// helper function/shortcut so can use the cart data with one line
// access in other components by: const { cartItems, addToCart, removeFromCart } = useCart();
export function useCart() {
  return useContext(CartContext);
}