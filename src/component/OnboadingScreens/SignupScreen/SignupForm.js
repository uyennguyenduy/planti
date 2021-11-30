
import React, { useState } from 'react';
import { useCallback } from 'react';
import { memo } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import {  View, TextInput, Text, TouchableOpacity, ImageBackground, Alert, ActivityIndicator} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest } from '../../../redux/actions/authActions';
import { selectAuthUser } from '../../../redux/reducers/authSlice';
import { signupUser } from '../../../service/authUser';
import { styles } from '../../../theme/loginStyles';
import { LoadingScreen } from '../../LoadingScreen';

export function SignupForm({nav}) {
  const dispatch = useDispatch();
  const { isLoading, authResult, error } = useSelector(selectAuthUser);
  const [ data, setData ] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    passwordConfirmError: '',
    emailError: '',
    passwordError: '',
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

  const signUp = (email, password) => {
    console.log(dispatch(signupRequest({email, password})))
    return dispatch(signupRequest({email, password}))
  }
 
    const alert = (isLoading === false && authResult === 'failed') ? 
      Alert.alert("Error creating account", error, [
        {text: "OK"}
      ]) : 
      (isLoading === false && authResult === 'success') ?
      Alert.alert("Signup", "Created successfully", [
        {text: "OK", onPress: () => nav.navigate("Login")}
      ]) : null


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
        onPress={() => signUp(data.email, data.password)}
      >
        <Text style={styles.login}>
          { isLoading? <ActivityIndicator color="white"/> :"JOIN WITH US!"}
        </Text>
      </TouchableOpacity>   
      { alert }
    </View>
        
  )
}


