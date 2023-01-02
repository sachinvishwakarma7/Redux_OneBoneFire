import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SignIn} from '../../redux/Action/Login.action';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [userinformation, setUserInformation] = useState({
    email: '',
    password: '',
  });

  const {email, password} = userinformation;
  const [isError, setIsError] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);

  // const {login, isLoading, userToken} = useContext(AuthContext);

  // console.log('MasterStack userInfo', userInfo);

  const userHandler = (value, fieldName) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    if (fieldName === 'email') {
      if (regex.test(value)) {
        setCheckEmail(false);
      } else {
        setCheckEmail(true);
      }
    }
    setUserInformation({...userinformation, [fieldName]: value});
  };

  const _onPressLogin = async () => {
    if (email && password) {
      const response = await dispatch(SignIn(userinformation));
      console.log('response', response);
      if (response && response?.token) {
        navigation.navigate('Home');
        // Alert.alert('Hello');
      } else {
        Alert.alert('Invalid Email or Password');
      }
    } else {
      Alert.alert('Please Enter Email/Password');
    }
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.LoginContainer}>
          <Image
            style={{
              resizeMode: 'contain',
              width: 250,
            }}
            source={require('../../assets/images/logo.png')}
          />
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'gray'}
            onChangeText={value => userHandler(value, 'email')}></TextInput>

          {!email && isError ? (
            <Text style={{color: 'red', marginLeft: 14, fontSize: 10}}>
              *Please Enter Email ID
            </Text>
          ) : checkEmail ? (
            <Text style={{color: 'red', marginLeft: 14, fontSize: 10}}>
              *Please Enter Valid Email ID
            </Text>
          ) : (
            ''
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry={true}
            onChangeText={value => userHandler(value, 'password')}
            style={styles.input}
            placeholderTextColor={'gray'}
            placeholder="Password"></TextInput>
          {!password && isError ? (
            <Text style={{color: 'red', marginLeft: 14, fontSize: 10}}>
              *Please Enter Password
            </Text>
          ) : (
            ''
          )}
        </View>

        <TouchableOpacity style={{margin: 10}}>
          <Text style={{color: 'gray'}}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={_onPressLogin}
          style={styles.submitContainer}>
          <Text style={styles.submitBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '94%',
  },
  input: {
    color: 'gray',
    height: 40,
    margin: 12,
    borderBottomWidth: 0.5,
    padding: 10,
  },
  LoginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'gray',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  submitContainer: {
    width: '84%',
    backgroundColor: '#009688',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  submitBtn: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
