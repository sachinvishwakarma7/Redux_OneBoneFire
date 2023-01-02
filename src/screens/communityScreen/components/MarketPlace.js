import {ActivityIndicator, SafeAreaView, View, StyleSheet} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import GridView from './GridView';
import ListView from './ListView';
import HeaderCommunity from './HeaderCommunity';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../../redux/Action/GetAllProduct.action';

const MarketPlace = ({navigation}) => {
  const dispatch = useDispatch();
  const {login_response} = useSelector(state => state.SignInReducer);
  const {all_product, isLoading} = useSelector(
    state => state.getAllProductReducer,
  );

  const [product, setProduct] = useState([]);
  const [listView, setListView] = useState(true);
  const [serchValue, setSearchValue] = useState('');

  // console.log('marketPlace ,all_product', all_product?.items);

  // console.log('marketPlace ,product', product);
  // const {
  //   setIsLoading,
  //   isLoading,
  //   userToken,
  //   productList,
  //   setProductList,
  //   serchValue,
  //   logout,
  // } = useContext(AuthContext);

  // function search(source, name) {
  //   var results;
  //   name = name.toUpperCase();
  //   results = source.filter(function (entry) {
  //     return entry.name.toUpperCase().indexOf(name) !== -1;
  //   });
  //   return results;
  // }
  const SearchValue = search => {
    setSearchValue(search);
  };

  const newProductArray = product.filter(item => {
    const productItem = item.tags.toUpperCase();
    const searchValueToUpperCase = serchValue.toUpperCase();
    return productItem.includes(searchValueToUpperCase);
  });

  const getListView = view => {
    setListView(view);
  };

  // const triggerPageSize = value => {
  //   console.log(pageSize + value);
  //   setPageSize(pageSize + value);
  // };

  useEffect(() => {
    // console.log(login_response?.token);
    dispatch(getProduct(login_response?.token));
    setProduct(all_product?.items);
  }, [product]);

  return (
    <SafeAreaView>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            marginTop: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} animating={true} />
        </View>
      ) : (
        <React.Fragment>
          <HeaderCommunity
            setSearchValue={search => SearchValue(search)}
            setListView={getListView}
          />
          {newProductArray.length <= 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 200,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size={'large'} animating={true} />
              </View>
            </View>
          ) : listView ? (
            <GridView navigation={navigation} data={newProductArray} />
          ) : (
            <ListView data={newProductArray} />
          )}
        </React.Fragment>
      )}
    </SafeAreaView>
  );
};
export default memo(MarketPlace);

const styles = StyleSheet.create({
  circle: {
    zIndex: 1,
    height: 35,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'CircularStd-Book',
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
  },
});
