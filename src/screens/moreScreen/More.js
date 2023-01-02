import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const More = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            height: 80,
            width: 80,
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
          }}>
          <Text style={{fontSize: 26}}>R.P</Text>
        </View>
        <View style={{margin: 20, alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            RituRaj Pandey
          </Text>
          <Text style={{fontSize: 14, color: 'gray', fontWeight: 'bold'}}>
            OK Botanicals Inc
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 14, color: 'gray', fontWeight: 'bold'}}>
              Up to 15 Listing
            </Text>
            <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>
              (Active)
            </Text>
          </View>
        </View>
      </View>

      <View style={{backgroundColor: 'white', width: '100%'}}>
        <TouchableOpacity
          onPress={() => alert('Hello User')}
          style={{
            flexDirection: 'row',
            borderColor: 'gray',
            elevation: 1,
            paddingVertical: 15,
            justifyContent: 'center',
          }}>
          <Ionicons name="md-person-outline" color="gray" size={30} />
          <Text style={styles.userDetails}>User Account</Text>
          <Ionicons
            name="md-chevron-forward-outline"
            color="gray"
            size={25}
            style={{marginLeft: 170}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Hello User')}
          style={{
            flexDirection: 'row',
            borderColor: 'gray',
            elevation: 1,
            paddingVertical: 15,
            justifyContent: 'center',
          }}>
          <Ionicons name="md-briefcase-outline" color="gray" size={30} />
          <Text style={styles.userDetails}>Business Profile</Text>
          <Ionicons
            name="md-chevron-forward-outline"
            color="gray"
            size={25}
            style={{marginLeft: 150}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Hello User')}
          style={{
            flexDirection: 'row',
            borderColor: 'gray',
            elevation: 1,
            paddingVertical: 15,
            justifyContent: 'center',
          }}>
          <Ionicons name="ios-call-outline" color="gray" size={30} />
          <Text style={styles.userDetails}>Contact Support</Text>
          <Ionicons
            name="md-chevron-forward-outline"
            color="gray"
            size={25}
            style={{marginLeft: 150}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Hello User')}
          style={{
            flexDirection: 'row',
            borderColor: 'gray',
            elevation: 1,
            paddingVertical: 15,
            justifyContent: 'center',
          }}>
          <Ionicons name="ios-receipt-outline" color="gray" size={30} />
          <Text style={styles.userDetails}>Terms and Conditions</Text>
          <Ionicons
            name="md-chevron-forward-outline"
            color="gray"
            size={25}
            style={{marginLeft: 105}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Hello User')}
          style={{
            flexDirection: 'row',
            borderColor: 'gray',
            elevation: 1,
            paddingVertical: 15,
            justifyContent: 'center',
          }}>
          <Ionicons name="ios-reader-outline" color="gray" size={30} />
          <Text style={styles.userDetails}>Privacy Policy</Text>
          <Ionicons
            name="md-chevron-forward-outline"
            color="gray"
            size={25}
            style={{marginLeft: 170}}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.version}>Version: 1.026</Text>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  userDetails: {
    marginLeft: 10,
    fontSize: 18,
    marginTop: 5,
  },
  version: {
    alignSelf: 'center',
    marginTop: 18,
    fontSize: 18,
  },
});
