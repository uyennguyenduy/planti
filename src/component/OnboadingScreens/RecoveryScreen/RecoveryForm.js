
import React, { useState } from 'react';
import {  View, TextInput, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { passwordForgetRequest, resetAuthState } from '../../../redux/actions/authActions';
import { selectAuthUser } from '../../../redux/reducers/authSlice';
import { styles } from '../../../theme/loginStyles';

export function RecoveryForm({nav}) {

  const dispatch = useDispatch();
  const { isLoading, authResult, error } = useSelector(selectAuthUser);

  const [ email, setEmail ] = useState('');

  const alert = (isLoading === false && authResult === 'failed') ? 
    Alert.alert("Error", error, [
      {
        text: "OK",
        onPress: () => dispatch(resetAuthState())
      }
    ]) : 
    (isLoading === false && authResult === 'success') ?
    Alert.alert("Recovery", "New password is sent to your email", [
      {
        text: "OK", 
        onPress: () => nav.navigate("Login")
    }
    ]) : null;

  return(
   
    <View style={styles.loginForm}>
      <Text style={[styles.textBody, {fontStyle: 'italic'}]}>
        Enter your account email
      </Text>
      <View style={styles.loginBody}>
        <TextInput
          style={styles.loginInput}
          placeholder="Email Address"
          placeholderTextColor="#008b8b"
          defaultValue={email}
          autoFocus={true}
          onChangeText={(email) => setEmail(email)}
              
        />
      </View>
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => dispatch(passwordForgetRequest(email))}
      >
        <Text style={styles.login}>
          { isLoading? <ActivityIndicator color="white"/> :"RESET PASSWORD"}
        </Text>
      </TouchableOpacity>
      {alert}
    </View>
        
  )
}


