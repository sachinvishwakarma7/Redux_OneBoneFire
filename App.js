import {View, StatusBar, Text} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/Store';
import {LoaderContext} from './src/Utilits/Context';
import Root from './src/root';

const App = () => {
  const [isShowLoader, setIsShowLoader] = useState(false);
  const loaderContext = useMemo(() => ({
    showLoader: async () => {
      try {
        setIsShowLoader(true);
      } catch (e) {
        console.log(e);
      }
    },
    hideLoader: async () => {
      try {
        setIsShowLoader(false);
      } catch (e) {
        console.log(e);
      }
    },
  }));
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <LoaderContext.Provider value={loaderContext}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Root />
          </PersistGate>
        </Provider>
      </LoaderContext.Provider>
    </View>
  );
};

export default App;
