
import React, { useState } from 'react';
import {  View, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { styles } from '../../../theme/loginStyles';

export function SignupForm() {

  const [ username, setUsername] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  return(
    
    <View style={[styles.loginForm, {borderWidth: 0}]}>
      <View style={styles.loginBody}>
        <TextInput
          style={styles.loginInput}
          placeholder="Your name"
          placeholderTextColor="#008b8b"
          defaultValue={username}
          autoFocus={true}
          onChangeText={(text) => setUsername(text)}
              
        />
        <TextInput
          style={styles.loginInput}
          placeholder="Email Address"
          placeholderTextColor="#008b8b"
          defaultValue={email}
          autoFocus={true}
          onChangeText={(email) => setEmail(email)}
              
        />
        <TextInput
          style={styles.loginInput}
          placeholder="Password"
          placeholderTextColor="#008b8b"
          defaultValue={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => alert("Login succesfully")}
      >
        <Text style={styles.login}>JOIN WITH US!</Text>
      </TouchableOpacity>   
    </View>
        
  )
}


