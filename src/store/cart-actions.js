import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-react-backend-default-rtdb.firebaseio.com/cart.json",
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        products: cartData.products || [],
        count: cartData.count
      }));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error ⛔',
        message: 'Fetching cart data failed!'
      }));
    }
  };
};

export const cartUpdate = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending 🔃',
      message: 'Sending cart data...'
    }));

    const sendRequest = async () => {
      const response =
        await fetch("https://redux-react-backend-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({
              products: cart.products,
              count: cart.count
            })
          });

      if (!response) {
        throw new Error('Sending cart data failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success ✅',
        message: 'Cart data sent successfully!'
      }));

    } catch (err) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error ⛔',
        message: 'Sending cart data failed!'
      }));
    }
  };
};
