//CAROUSEL EXAMPLE

import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ScrollView} from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import {productDetails} from '../../redux/Action/ProductDetails.action';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const ProductDetails = ({route}) => {
  const dispatch = useDispatch();
  const {product_details} = useSelector(state => state.productDetailsReducer);
  const {login_response} = useSelector(state => state.SignInReducer);

  // console.log('route?.params?.id', route?.params?.id);
  // console.log('product_details', product_details);

  const [productId, setProductId] = useState(null);

  const renderItem = useCallback(({item}) => {
    return (
      <View
        style={{
          padding: 20,
          justifyContent: 'center',
          borderRadius: 20,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          source={{uri: item?.mediaURL}}
          style={{width: ITEM_WIDTH, height: 200, resizeMode: 'contain'}}
        />
      </View>
    );
  }, []);

  useEffect(() => {
    setProductId(route?.params?.id);

    if (productId !== null) {
      dispatch(productDetails(productId, login_response?.token));
    }
  }, [productId]);

  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  // console.log(
  //   'product_details',
  //   product_details
  //     ? product_details?.product_Price_Stock
  //       ? product_details?.product_Price_Stock[0].product_Gallery
  //       : []
  //     : [],
  // );

  return (
    <View style={styles.container}>
      <View>
        <Carousel
          ref={isCarousel}
          data={
            product_details
              ? product_details?.product_Price_Stock
                ? product_details?.product_Price_Stock[0].product_Gallery
                : []
              : []
          }
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          dotsLength={
            product_details
              ? product_details?.product_Price_Stock
                ? product_details?.product_Price_Stock[0].product_Gallery.length
                : []
              : []
          }
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: '#009688',
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: 'black',
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20,
        }}>
        {/* <Text style={{fontSize: 18}}>Price</Text> */}

        <Text style={{fontSize: 24, color: 'black'}}>
          ${' '}
          {product_details?.product_Price_Stock
            ? product_details?.product_Price_Stock[0]?.unit_Price
            : null}
        </Text>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 18}}>Discription</Text>
      </View>

      <ScrollView>
        <View style={{margin: 50}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18}}>Brand</Text>
            <Text style={{fontSize: 18}}>
              {product_details?.product_Details
                ? product_details?.product_Details?.brand_Name
                : null}
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18}}>Discount</Text>
            <Text style={{fontSize: 18}}>
              {product_details?.product_Price_Stock
                ? product_details?.product_Price_Stock[0]?.discount
                : null}
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18}}>Current Quantity</Text>
            <Text style={{fontSize: 18}}>
              {product_details?.product_Price_Stock
                ? product_details?.product_Price_Stock[0]?.currentQuantity
                : null}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          zIndex: 1,
          padding: 24,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 50,
            backgroundColor: '#009688',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    width: '100%',
  },
  imagestyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
