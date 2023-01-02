import {
  APPLICATION_JSON_HEADER,
  BASE_URL,
  POST_METHOD,
  httpClient,
} from '../../Utilits/Constants';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
} from '../Constants/Login.type';
import apiEndPoints from '../../Utilits/apiEndPoints';
// import { useDispatch } from 'react-redux';

export const SignIn = params => {
  // const dispatch = useDispatch();
  console.log('params', params);
  return async dispatch => {
    dispatch({type: SIGN_IN_REQUEST});
    try {
      const {data} = await httpClient[POST_METHOD](
        `${BASE_URL + apiEndPoints.SIGN_IN}`,
        params,
        APPLICATION_JSON_HEADER,
      );
      console.log('signin data', data);
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {login_response: data},
        error: false,
      });
      return data;
    } catch (error) {
      console.log('error.response', error);
      if (error.response) {
        dispatch({
          type: SIGN_IN_FAILURE,
          payload: {login_response: null},
          error: true,
        });
        return error;
      } else {
        dispatch({
          type: SIGN_IN_FAILURE,
          payload: {login_response: null},
          error: true,
        });
        return error;
      }
    }
  };
};
