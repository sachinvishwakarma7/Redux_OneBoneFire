import {initialState} from '../../Utilits/Constants';
import {
  CART_ITEMS_FAILURE,
  CART_ITEMS_REQUEST,
  CART_ITEMS_SUCCESS,
} from '../Constants/CartItems.type';

export const cartItemsReducer = (state = initialState, action) => {
  console.log('cartItemsReducer', action.payload);
  //   console.log('cart_items state', state);
  switch (action.type) {
    case CART_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case CART_ITEMS_SUCCESS:
      return {
        ...state,
        cart_items: action.payload.cart_items,
        error: false,
        isLoading: false,
      };
    case CART_ITEMS_FAILURE:
      return {
        ...state,
        cart_items: null,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
