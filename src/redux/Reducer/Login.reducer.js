import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from '../Constants/Login.type';
import {initialState} from '../../Utilits/Constants';

export const SignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        login_response: action.payload.login_response,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    default:
      return state;
  }
};
