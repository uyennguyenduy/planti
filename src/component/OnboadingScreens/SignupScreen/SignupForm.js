
import React, { useState } from 'react';
import {  View, TextInput, Text, TouchableOpacity, ImageBackground, Alert} from 'react-native';
import { signupUser } from '../../../service/authUser';
import { styles } from '../../../theme/loginStyles';
import { LoadingScreen } from '../../LoadingScreen';

export function SignupForm({nav}) {

  const [ data, setData ] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    passwordConfirmError: '',
    emailError: '',
    passwordError: '',
    isLoading: false
  })
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
  const onPasswordConfirmChange = (passwordConfirm) => {
    if(passwordConfirm.length === 0) {
      setData({
        ...data,
        passwordConfirm,
        passwordConfirmError: 'Password confirm cannot be empty'
      })
    } else if (passwordConfirm !== data.password) {
      setData({
        ...data,
        passwordConfirm,
        passwordConfirmError: 'Passwords not matched'
      })
    } else {
      setData({
        ...data,
        passwordConfirm,
        passwordConfirmError: ''
      })
    }
  }
  const signupCallback = (response) => {
    console.log(response.result)
    if (response.result === "success") {
      nav.navigate("Home")
    } else {
      Alert.alert("Error creating account", response.error, [
        {text: "OK"}
      ])
    }
    setData({
      ...data,
      loading: false
    })
  }
  const signUp = () => {
    setData({
      ...data,
      loading: true
    });
    signupUser(data.email, data.password, signupCallback)
  }

  if (data.isLoading) {
    return (
      <LoadingScreen />
    )
  }
  return(
    
    <View style={[styles.loginForm, {borderWidth: 0}]}>
      <View style={styles.loginBody}>
        <TextInput
          style={styles.loginInput}
          placeholder="Email Address"
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
        <Text style={styles.textWarning}>{data.passwordError && data.passwordError}</Text>
        <TextInput
          style={styles.loginInput}
          placeholder="Password Confirm"
          placeholderTextColor="#008b8b"
          defaultValue={data.passwordConfirm}
          secureTextEntry={true}
          onChangeText={(password) => onPasswordConfirmChange(password)}
        />
        <Text style={styles.textWarning}>{data.passwordConfirmError && data.passwordConfirmError}</Text>
      </View>
      <TouchableOpacity 
        disabled={data.email.length === 0 || data.password.length === 0 ||
          data.passwordConfirm.length === 0 || data.passwordConfirmError || 
          data.emailError || data.passwordError
        }
        style={styles.loginBtn}
        onPress={signUp}
      >
        <Text style={styles.login}>JOIN WITH US!</Text>
      </TouchableOpacity>   
    </View>
        
  )
}


