
import React, { useState } from 'react';
import {  View, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { styles } from '../../../theme/loginStyles';
import { SignupForm } from './SignupForm';

export function SignupScreen() {


  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Images/bg-plant.jpg')}
        resizeMode='cover'
        style={styles.layout}
      >
        <View>
          <Text style={styles.heading}>Create Your Account !</Text>
          <Text style={[styles.textBody, {fontStyle: 'italic'}]}>
            We are happy to welcome you as a part of PLANTI family
          </Text>
        </View>
        
        <SignupForm/>

        <View style={styles.footer}>
          <Text style={styles.textBody}>
            By continuing, you agree to PLANTI's Terms of Use and Privacy Policy
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}


