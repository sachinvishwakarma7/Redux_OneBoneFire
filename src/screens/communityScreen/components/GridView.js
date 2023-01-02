import {template} from '@babel/core';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Dimensions} from 'react-native';
// import {AuthContext} from '../../../Context/AuthProvider';

const GridView = ({navigation, data, pageSize}) => {
  // const {isLoading, setIsLoading, cartData, setGetCartItem, getCartItem} =
  //   useContext(AuthContext);
  const ScreenWidth = Dimensions.get('window').width;
  const ScreenHeight = Dimensions.get('window').height;

  const _addToCart = async item => {
    console.log('GridView, _addToCart', item);
    /*
    if (getCartItem.some(data => data.product_Details.id == item.id)) {
      Alert.alert('items already have in cart');
    } else {
      const res = await cartData(item.id);
      setGetCartItem([...getCartItem, {...res, qty: 1}]);
    }
    */

    // setGetCartItem([...getCartItem, {...item}])
    // if(getCartItem.length == 0){
    //   setGetCartItem([...getCartItem, {...item}])
    // }else{
    //   Alert.alert('iasfsdf')
    // }
  };

  // console.log('gridView getCartItem', getCartItem);

  // const PdetailsRes = async(item)=>{
  //   const getPdata = await Pdetails(item.id)
  //   setGetCartItem([...getCartItem,{...getPdata}])
  //   console.log('response',getPdata);
  // }

  // console.log('gridView getCartItem', getCartItem);
  // useEffect(() => {}, [getCartItem]);

  const renderItem = useCallback(
    ({item}) => {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            margin: 4,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              width: ScreenWidth / 2 - 10,
              height: ScreenHeight / 2 - 100,
              margin: 2,
              borderColor: 'gray',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductDetails', {id: item.id});
              }}>
              <Image
                source={{
                  uri: item.mediaURL,
                }}
                style={{resizeMode: 'contain', height: 200}}
              />
            </TouchableOpacity>
            <View style={{marginLeft: 10}}>
              <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
                {item.tags}
              </Text>
              <Text numberOfLines={1} style={{fontSize: 10}}>
                {item.name}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => _addToCart(item)}
              style={{
                flex: 1,
                backgroundColor: '#009688',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 0,
                marginTop: 10,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    },
    [data],
  );

  return (
    <React.Fragment>
        <View style={{marginBottom: 150}}>
          <FlatList
            onEndReachedThreshold={1}
            numColumns={2}
            horizontal={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={useCallback(
              item => {
                return item.id;
              },
              [data],
            )}
          />
        </View>
    </React.Fragment>
  );
};

export default GridView;
