import {View, Text, Image} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{resizeMode: 'contain', width: 200}}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
