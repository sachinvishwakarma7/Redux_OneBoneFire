import {initialState} from '../../Utilits/Constants';
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from '../Constants/GetAllProduct.type';

export const getAllProductReducer = (state = initialState, action) => {
  console.log('getAllProductReducer action.payload', action.payload);
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        all_product: action.payload.all_product,
        isLoading: false,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    default:
      return state;
  }
};
