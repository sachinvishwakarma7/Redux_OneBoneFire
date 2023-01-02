import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Myitems from './components/Myitems';
import MyList from './components/MyList';

const Tab = createMaterialTopTabNavigator();

const MyStuff = () => {
  return (
    <Tab.Navigator initialRouteName="Myitems">
      <Tab.Screen name="Myitems" component={Myitems} />
      <Tab.Screen name="MyList" component={MyList} />
    </Tab.Navigator>
  );
};

export default MyStuff;
