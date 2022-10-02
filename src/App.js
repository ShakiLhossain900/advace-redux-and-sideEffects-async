import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://redux-5703a-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    });
  }, [cart]); //whenever cart changes the data will be re-execute by using the cart dependency

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

//complete using effect to the redux 
//tomorrow i will be complete this reducx module 
