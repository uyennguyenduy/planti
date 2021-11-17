
import React, { useState } from 'react';
import {  View, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { styles } from '../../theme/loginStyles';

export function Signup() {

  const [ username, setUsername] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Images/bg-plant.jpg')}
        resizeMode='cover'
        style={styles.layout}
      >
        <View>
          <Text style={styles.heading}>Create Your Account !</Text>
          <Text style={[styles.textBody, {fontStyle: 'italic'}]}>
            We are happy to welcome you as a part of PLANTI family
          </Text>
        </View>
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
        <View style={styles.footer}>
          <Text style={styles.textBody}>
            By continuing, you agree to PLANTI's Terms of Use and Privacy Policy
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}


