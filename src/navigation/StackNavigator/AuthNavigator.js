import React, {useContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/loginScreen/LoginScreen';
import SplashScreen from '../../screens/loginScreen/SplashScreen';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  const [show, setShow] = useState(false);

  const validShow = () => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  };
  validShow();
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName="SplashScreen">
        {show ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={() => ({headerShown: false})}
          />
        ) : (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={() => ({headerShown: false})}
          />
        )}
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default LoginStack;
