import {initialState} from '../../Utilits/Constants';
import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
} from '../Constants/ProductDetails.type';

export const productDetailsReducer = (state = initialState, action) => {
  //   console.log('productDetailsReducer', action.payload);
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product_details: action.payload.product_details,
        error: false,
        isLoading: false,
      };
    case PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        product_details: null,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
