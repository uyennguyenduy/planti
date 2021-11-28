import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {  View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { styles } from '../../../theme/loginStyles';
import { LoginForm } from './LoginForm';

export function LoginScreen() {
  const nav = useNavigation()

  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Images/bg-plant.jpg')}
        resizeMode='cover'
        style={styles.layout}
      >
        <View>
          <Text style={styles.heading}>Welcome Back!</Text>
        </View>
        
        <LoginForm nav={nav} />

        <View style={styles.footer}>
          <Text style={styles.textBody}>Don't have an account?  </Text>
          <TouchableOpacity
            onPress={() => nav.navigate("Signup")}
          >
            <Text style={styles.textBody}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}


