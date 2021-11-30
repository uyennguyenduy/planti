import React, { useContext, useEffect, useState } from 'react';
import {  View, Alert, TextInput, Text, TouchableOpacity, ImageBackground, ActivityIndicator} from 'react-native';
import { styles } from '../../../theme/loginStyles';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../../redux/actions/authActions';
import { selectAuthUser } from '../../../redux/reducers/authSlice';


export function LoginForm({nav}) {

  const { isLoading, authResult, error } = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  const [ data, setData ] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    emailError: '',
    passwordError: '',
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
  
  const login = (email, password) => {
    dispatch(loginRequest({email, password}));
    console.log(dispatch(loginRequest({email, password})))
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
          onPress={() => login(data.email, data.password)}
        >
          <Text style={styles.login}>{isLoading ? <ActivityIndicator/> : "LOGIN" }</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nav.navigate("Recovery")}
        >
          <Text style={styles.textBody}>Forgot password?</Text>
        </TouchableOpacity>
        {(isLoading === false && authResult === 'failed') ? Alert.alert("Error Login", error, [
         {text: "OK"}]) : null
        }
    </View>

       
  )
}


