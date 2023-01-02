import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useContext, useState} from 'react';
// import { AuthContext } from '../../../Context/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderCommunity = ({setListView,setSearchValue}) => {
  const [gridListColor, setGridListColor] = useState(true);
  // const {setSearchValue} = useContext(AuthContext);

  return (
    <View
      style={{height: 50, backgroundColor: 'white', elevation: 4, zIndex: 1}}>
      <View
        style={{
          flex: 1,
          margin: 6,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setListView(true);
              setGridListColor(true);
            }}
            style={{marginLeft: 10}}>
            <Ionicons
              color={!gridListColor ? 'gray' : '#009688'}
              name="grid"
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setListView(false);
              setGridListColor(false);
            }}
            style={{marginLeft: 6}}>
            <MaterialCommunityIcons
              color={gridListColor ? 'gray' : '#009688'}
              name="view-list"
              size={28}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            // value={serchValue}
            onChangeText={value => setSearchValue(value)}
            // onFocus={() => {
            //   setClicked(true);
            // }}
          />
        </View>
        <View style={{marginRight: 10}}>
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderCommunity;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'whitesmoke',
    fontSize: 14,
    color: 'black',
    borderRadius: 18,
    paddingLeft: 16,
  },
  inputContainer: {
    width: '60%',
  },
});
