import { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let inInitail = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending..... ",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://redux-practice-10cc2-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data Failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "success!",
          message: "Sent cart data successfully!",
        })
      );
    };
    //for amar notification ta age theke show kore tai ami ata soriye neoar jonnu ata koreci
    if(inInitail){
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error! ",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);
  // here dispatch will never change only cart will be change
  //cart here not only dependensy here now dispatch also dependensy here //whenever cart changes the data will be re-execute by using the cart dependency
  return (
    <Fragment>
      {notification && <Notification
      state={notification.status}
      title={notification.title}
      message={notification.message}
      />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;





















//the changing plan
//3 to 5 i need to sleep
//5 to 7 need to doing the code and the 7 to 10 i need to take preparation for exam
//10 to 5  i will do code
//than 9 am to 1 pm study than 2 to 5 again preparation (code 5 to 7 pm ) than 7 to 10 preparation for exam than 10 to 5 code agian
