import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, TouchableOpacity, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import ProductDetails from './ProductDetails';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import {Logout} from '../../redux/Action/Logout.Action';
import {useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const MainStack = ({navigation}) => {
  const dispatch = useDispatch();
  const createTwoButtonAlert = () =>
    Alert.alert('Confirm Logout', 'Are you sure want to Logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(Logout())},
    ]);

  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={BottomNavigator}
          options={({route}) => ({
            headerTitle: () => (
              <Image
                style={{
                  resizeMode: 'contain',
                  width: '70%',
                }}
                source={require('../../assets/images/logo.png')}
              />
            ),
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons size={30} name="shuffle-sharp" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => createTwoButtonAlert()}>
                <Ionicons size={30} name="exit-outline" />
              </TouchableOpacity>
            ),
          })}
        />
        {/* <Stack.Screen
            options={() => ({
              headerTitleAlign: 'center',
            })}
            name="ProductDetails"
            component={ProductDetails}
          /> */}
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default MainStack;
