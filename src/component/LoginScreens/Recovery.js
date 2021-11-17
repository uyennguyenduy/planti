
import React, { useState } from 'react';
import {  View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../../theme/loginStyles';

export function Recovery() {
  
  const [ email, setEmail ] = useState('');

  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Images/bg-plant.jpg')}
        resizeMode='cover'
        style={styles.layout}
      >
        <View>
          <Text style={styles.heading}>Password Recovery</Text>
        </View>
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
            onPress={() => alert("Login succesfully")}
          >
            <Text style={styles.login}>RESET PASSWORD</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textBody}>
            @PLANT COMUNITY
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}


