import {BASE_URL, GET_METHOD, httpClient} from '../../Utilits/Constants';
import apiEndPoints from '../../Utilits/apiEndPoints';
import {
  CART_ITEMS_REQUEST,
  CART_ITEMS_SUCCESS,
  CART_ITEMS_FAILURE,
} from '../Constants/CartItems.type';

export const cartItems = (id, token) => {
  console.log('cartItems.action, token', id, token);
  return async dispatch => {
    dispatch({type: CART_ITEMS_REQUEST});
    try {
      const {data} = await httpClient[GET_METHOD](
        `${BASE_URL + apiEndPoints.PRODUCT_DETAILS + id}`,
        AUTHORIZATION(token),
      );
      dispatch({
        type: CART_ITEMS_SUCCESS,
        payload: {cart_items: data},
        error: false,
      });
      console.log('cartItems', data);
    } catch (error) {
      if (error.response) {
        dispatch({
          type: CART_ITEMS_FAILURE,
          payload: {cart_items: null},
          error: true,
        });
      } else {
        dispatch({
          type: CART_ITEMS_FAILURE,
          payload: {cart_items: null},
          error: true,
        });
      }
    }
  };
};
