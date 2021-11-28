import React, { useContext, useState } from 'react';
import {  View, Alert, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { AuthContext } from '../../../../App';
import { styles } from '../../../theme/loginStyles';
import { USERS } from '../../../assets/data/USERS'

export function LoginForm({nav}) {


  const { signIn } = useContext(AuthContext).authContext;
  const [ data, setData ] = useState({
    username: 'user1',
    password: 'password1',
    message: '',
    check_textInputChange: false,
    isValidUser: true,
    isValidPassword: true
  });
  
  const passwordInputChange = (val) => {
    if (val.trim().length > 6) {
      setData({
        ...data,
        password: val,
        check_textInputChange: true,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        check_textInputChange: false,
        isValidPassword: false
      });
    }
  }
  const handleValidPassword = (val) => {
    if (val.trim().length > 4) {
      setData({
        ...data,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        isValidPassword: false
      });
    }
  }
  const handleLogin = (userName, password) => {
    const foundUser = USERS.filter(item => {
      return userName === item.username && password === item.password;
    });
    if ( data.username.length === 0 || data.password.length === 0) {
      Alert.alert('Wrong Input!', 'Username or password cannot be empty', [
        {text: 'Ok'}
      ]);
      alert("Wrong Input!', 'Username or password cannot be empty");
      return;
    };
    if ( foundUser.length === 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect', [
        {text: 'Ok'}
      ]);
      alert("Invalid User!', 'Username or password is incorrect")
      return;
    };
    
    signIn(foundUser);
  }
  return(
   
    <View style={styles.loginForm}>
      <Text style={styles.loginTitle}>Log in to continue</Text>
        <View style={styles.loginBody}>
          <TextInput
            style={styles.loginInput}
            placeholder="Email or username"
            placeholderTextColor="#008b8b"
            defaultValue={data.username}
            autoFocus={true}
            onChangeText={(text) => setData({...data, username: text})}
          />
      
          <TextInput
            style={styles.loginInput}
            placeholder="Password"
            placeholderTextColor="#008b8b"
            defaultValue={data.password}
            secureTextEntry={true}
            onChangeText={(val) => passwordInputChange(val)}
            onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
          />
            { data.isValidPassword ? null : 
              <Text style={[styles.textWarning, {fontStyle: 'italic'} ]}>
                Password must be more than 6 characters long
              </Text>
            }
        </View>
            
        <TouchableOpacity 
          style={styles.loginBtn}
          onPress={() => handleLogin(data.username, data.password)}
        >
          <Text style={styles.login}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nav.navigate("Recovery")}
        >
          <Text style={styles.textBody}>Forgot password?</Text>
        </TouchableOpacity>
    </View>

       
  )
}


