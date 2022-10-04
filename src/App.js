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



//the changing plan 
//3 to 5 i need to sleep
 //5 to 7 need to doing the code and the 7 to 10 i need to take preparation for exam
 //10 to 5  i will do code 
 //than 9 am to 1 pm study than 2 to 5 again preparation (code 5 to 7 pm ) than 7 to 10 preparation for exam than 10 to 5 code agian
