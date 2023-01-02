import React, {useContext, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {AuthContext} from '../../Context/AuthProvider';
import {Text} from 'react-native';
import CommunityScreen from '../../screens/communityScreen';
import Dashboard from '../../screens/homeScreen/Dashboard';
import More from '../../screens/moreScreen/More';
import Message from '../../screens/messageScreen/Message';
import MyStuff from '../../screens/myStuffScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  // const {getCartItem} = useContext(AuthContext);
  // const [itemsLength] = useState(getCartItem.length.toString());
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'md-people-sharp' : 'md-people-outline';
          } else if (route.name === 'MyStuff') {
            iconName = focused ? 'md-layers' : 'md-layers-outline';
          } else if (route.name === 'Message') {
            iconName = focused ? 'md-mail-sharp' : 'md-mail-outline';
          } else if (route.name === 'More') {
            iconName = focused
              ? 'ios-reorder-three'
              : 'ios-reorder-three-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#009688',
        tabBarLabelStyle: {
          color: 'gray',
          marginBottom: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarStyle: {
          position: 'absolute',
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen
        name="MyStuff"
        // options={{
        //   tabBarBadge:
        //     getCartItem.length !== 0 ? <Text>{getCartItem.length}</Text> : null,
        // }}
        component={MyStuff}
      />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
