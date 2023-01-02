import {
  AUTHORIZATION,
  BASE_URL,
  GET_METHOD,
  httpClient,
} from '../../Utilits/Constants';
import apiEndPoints from '../../Utilits/apiEndPoints';
import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
} from '../Constants/ProductDetails.type';

export const productDetails = (id, token) => {
  console.log('productDetails.action, token', id, token);
  return async dispatch => {
    dispatch({type: PRODUCT_DETAILS_REQUEST});
    try {
      const {data} = await httpClient[GET_METHOD](
        `${BASE_URL + apiEndPoints.PRODUCT_DETAILS + id}`,
        AUTHORIZATION(token),
      );
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: {product_details: data},
        error: false,
      });
      console.log('productDetails', data);
    } catch (error) {
      if (error.response) {
        dispatch({
          type: PRODUCT_DETAILS_FAILURE,
          payload: {product_details: null},
          error: true,
        });
      } else {
        dispatch({
          type: PRODUCT_DETAILS_FAILURE,
          payload: {product_details: null},
          error: true,
        });
      }
    }
  };
};
