import React, { useContext, useState } from 'react';
import {  View, Alert, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { AuthContext } from '../../../../App';
import { styles } from '../../../theme/loginStyles';
import { USERS } from '../../../assets/data/USERS'
import { LoadingScreen } from '../../LoadingScreen';
import { signinUser } from '../../../service/authUser';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function LoginForm({nav}) {


  const { signIn } = useContext(AuthContext).authContext;
  const [ data, setData ] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    emailError: '',
    passwordError: '',
    isLoading: false
  });
  
  const onEmailChange = (email) => {
    let regex = '';
    if (email.length === 0) {
      setData({
        ...data,
        email,
        emailError: 'Email cannot be empty'
      })
    } else {
      setData({
        ...data,
        email,
        emailError: ''
      })
    }
  }
  const onPasswordChange = (password) => {
    if (password.length === 0) {
      setData({
        ...data,
        password,
        passwordError: "Password cannot be empty!"
      })
    } else if (password.length < 6) {
      setData({
        ...data,
        password,
        passwordError: "Password must be 6 or more digit"
      })
    } else {
      setData({
        ...data,
        password,
        passwordError: ''
      })
    }
  }
  

  const signInCallback = async (response) => {
    setData({
      ...data,
      isLoading: false
    })
    console.log('response: ', response)
    if (response.result === 'success') {
      await AsyncStorage.setItem('user', JSON.stringify(response.user))
      nav.navigate("Home")
    } else {
      Alert.alert("Error Signing in", response.error, [
        {text: "OK"}
      ])
    }
  }

  const login = () => {
    setData({
      ...data,
      isLoading: true
    });
    signinUser(data.email, data.password, signInCallback)
  }

  if (data.isLoading) {
    return (
      <LoadingScreen />
    )
  }

  return(
   
    <View style={styles.loginForm}>
      <Text style={styles.loginTitle}>Log in to continue</Text>
        <View style={styles.loginBody}>
          <TextInput
            style={styles.loginInput}
            placeholder="Email"
            placeholderTextColor="#008b8b"
            defaultValue={data.email}
            autoFocus={true}
            onChangeText={(email) => onEmailChange(email)}
          />
          <Text style={styles.textWarning}>{data.emailError && data.emailError}</Text>
          <TextInput
            style={styles.loginInput}
            placeholder="Password"
            placeholderTextColor="#008b8b"
            defaultValue={data.password}
            secureTextEntry={true}
            onChangeText={(password) => onPasswordChange(password)}
          />
          <Text style={styles.textWarning}>{data.passwordError && data.password12345Error}</Text>
        </View>
            
        <TouchableOpacity 
          disabled={data.email.length === 0 || data.password.length === 0 || 
            data.emailError || data.passwordError
          }
          style={styles.loginBtn}
          onPress={login}
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


