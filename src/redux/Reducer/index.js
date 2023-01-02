import {combineReducers} from 'redux';
import {LOGOUT} from '../Constants/Logout.type';
import {SignInReducer} from './Login.reducer';
import {getAllProductReducer} from './GetAllProduct.reducer';

const appReducer = combineReducers({
  SignInReducer,
  getAllProductReducer,
});

const initialState = appReducer({}, {});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = initialState;
  }
  return appReducer(state, action);
};

export default rootReducer;
