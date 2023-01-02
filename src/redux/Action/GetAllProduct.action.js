import {
  AUTHORIZATION,
  BASE_URL,
  GET_METHOD,
  httpClient,
} from '../../Utilits/Constants';
import apiEndPoints from '../../Utilits/apiEndPoints';
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from '../Constants/GetAllProduct.type';

export const getProduct = token => {
  console.log('GetAllProduct.action getProduct,token', token);
  return async dispatch => {
    dispatch({type: GET_PRODUCT_REQUEST});
    try {
      const {data} = await httpClient[GET_METHOD](
        `${BASE_URL + apiEndPoints.PRODUCT_MAIN}`,
        AUTHORIZATION(token),
      );
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: {all_product: data},
        error: false,
      });
      console.log('GetAllProduct.action getProduct', data);
      return data;
    } catch (error) {
      if (error.response) {
        dispatch({
          type: GET_PRODUCT_FAILURE,
          payload: {all_product: error},
          error: true,
        });
      } else {
        dispatch({
          type: GET_PRODUCT_FAILURE,
          payload: {all_product: error},
          error: true,
        });
      }
    }
  };
};
