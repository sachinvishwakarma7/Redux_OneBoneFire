import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MarketPlace from './components/MarketPlace';
import Members from './components/Members';
const Tab = createMaterialTopTabNavigator();

const CommunityScreen = () => {
  return (
    <Tab.Navigator initialRouteName='MarketPlace'>
      <Tab.Screen name="MarketPlace" component={MarketPlace} />
      <Tab.Screen name="Members" component={Members} />
    </Tab.Navigator>
  )
}

export default CommunityScreen