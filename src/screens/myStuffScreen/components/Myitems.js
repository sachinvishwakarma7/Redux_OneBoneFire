/*
import {
  Text,
  Image,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import HeaderMyStuff from './HeaderMyStuff';
// import {AuthContext} from '../../../Context/AuthProvider';

const Myitems = ({navigation}) => {
  // const {getCartItem, setGetCartItem} = useContext(AuthContext);
  const ScreenHeight = Dimensions.get('window').height;
  const [total, setTotal] = useState(0);

  console.log('total', total);

  const removeItem = id => {
    console.log(id);
    const product = getCartItem.filter(
      product => product.product_Details.id !== id,
    );
    setGetCartItem(product);
  };

  console.log('total', total);

  const increment = id => {
    console.log('id', id);
    const newData = getCartItem.filter(data => {
      if (data.product_Details.id == id) {
        data.qty++;
      }
      return data;
    });
    setGetCartItem(newData);
  };

  const decrement = id => {
    console.log('id', id);
    const newData = getCartItem.filter(data => {
      if (data.product_Details.id == id) {
        if (data.qty > 1) {
          data.qty--;
        }
      } else {
        return data;
      }
      return data;
    });
    setGetCartItem(newData);
  };

  useEffect(() => {
    console.log('amount');
    const amount = getCartItem.map(item =>
      item.product_Price_Stock
        ? item.product_Price_Stock[0].unit_Price * item.qty
        : 0,
    );

    const amountData = amount.reduce((pre, cur) => pre + cur, 0);

    setTotal(amountData);
  }, [total, getCartItem]);

  const renderItem = useCallback(
    ({item}) => {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            height: ScreenHeight / 6,
            backgroundColor: 'white',
            margin: 4,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductDetails', {
                id: item.product_Details.id,
              })
            }>
            <View
              style={{
                height: 130,
                width: 130,
                justifyContent: 'center',
              }}>
              <Image
                source={{
                  uri: item.product_Price_Stock
                    ? item.product_Price_Stock[0].product_Gallery[0]?.mediaURL
                    : null,
                }}
                style={{resizeMode: 'contain', height: '100%'}}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text>{item.product_Details?.brand_Name}</Text>
              <Text style={{color: 'black', fontSize: 18}}>
                ${' '}
                {item.product_Price_Stock
                  ? item.product_Price_Stock[0]?.unit_Price * item.qty
                  : 0}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => decrement(item.product_Details.id)}>
                  <View
                    style={{
                      backgroundColor: '#009688',
                      height: 30,
                      width: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 6,
                    }}>
                    <Text style={{color: 'white'}}>-</Text>
                  </View>
                </TouchableOpacity>

                <View style={{margin: 6}}>
                  <Text>{item.qty}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => increment(item.product_Details.id)}>
                  <View
                    style={{
                      backgroundColor: '#009688',
                      height: 30,
                      width: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 6,
                    }}>
                    <Text style={{color: 'white'}}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => removeItem(item.product_Details.id)}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: 'red',
                    height: 30,
                    width: 90,
                    borderRadius: 6,
                  }}>
                  <Text style={{color: 'red'}}>Remove</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    },
    [getCartItem],
  );

  return (
    <SafeAreaView>
      <HeaderMyStuff />
      <React.Fragment>
        {getCartItem.length <= 0 ? (
          <View
            style={{
              justifyContent: 'center',
              marginTop: 200,
              alignItems: 'center',
            }}>
            <Text style={{color: 'red', fontSize: 20}}>No such items..</Text>
          </View>
        ) : (
          <View style={{marginBottom: 150}}>
            <View style={{marginBottom: 70}}>
              <FlatList
                onEndReachedThreshold={1}
                numColumns={1}
                horizontal={false}
                data={getCartItem}
                renderItem={renderItem}
                keyExtractor={item => {
                  return item.id;
                }}
              />
            </View>

            <View
              style={{
                zIndex: 2,
                padding: 6,
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0,
                height: 80,
                backgroundColor: 'white',
                flexDirection: 'row',
                elevation: 2,
              }}>
              <View style={{marginLeft: 40}}>
                <Text style={{fontSize: 18, color: 'black'}}>${total}</Text>
              </View>

              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  borderRadius: 6,
                  justifyContent: 'center',
                  height: 40,
                  width: '50%',
                  backgroundColor: '#009688',
                }}>
                <View>
                  <Text style={{color: 'white'}}>BUY NOW</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </React.Fragment>
    </SafeAreaView>
  );
};

export default Myitems;
*/

import {View, Text} from 'react-native';
import React from 'react';

const Myitems = () => {
  return (
    <View>
      <Text>Myitems</Text>
    </View>
  );
};

export default Myitems;
