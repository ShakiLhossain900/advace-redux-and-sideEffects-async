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
//10,11,12,13 need to complete before 3 pm 03 octeber
//tomorrow i will be complete this reducx module 
// than next module i need to run for it 20 building a multi page SPA with react router



//the changing plan 
//3 to 5 i need to sleep
 //5 to 7 need to doing the code and the 7 to 10 i need to take preparation for exam
 //10 to 5  i will do code 
 //than 9 am to 1 pm study than 2 to 5 again preparation (code 5 to 7) 
