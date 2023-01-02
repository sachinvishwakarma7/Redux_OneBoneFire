import {NavigationContainer} from '@react-navigation/native';
import MainStack from '../navigation/StackNavigator/MainStackNavigator';
import LoginStack from '../navigation/StackNavigator/AuthNavigator';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import LoginScreen from '../screens/loginScreen/LoginScreen';

const Root = () => {
  const {login_response} = useSelector(state => state.SignInReducer);
  console.log('login_response', login_response);
  return (
    <NavigationContainer>
      {login_response ? <MainStack /> : <LoginScreen />}
    </NavigationContainer>
  );
};
export default Root;
