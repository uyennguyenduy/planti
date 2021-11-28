import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colorsTheme';

export function WelcomeScreen() {
  const nav = useNavigation();
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Images/bg-plant1.jpg')}
        resizeMode="cover"
        style={styles.layout}
      >
        <Text style={styles.logo}>PLANTI.</Text>
        <Text style={styles.subtitle}>Bring nature home</Text>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.LoginBtn}
            onPress={() => nav.navigate('Login')}
          >
            <Text style={styles.login}>
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.SingupBtn}
            onPress={() => nav.navigate('Signup')}
          >
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70
  },
  logo: {
    color: Colors.secondary,
    fontSize: 75,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontStyle: 'italic',
    color: Colors.secondary
  },
  LoginBtn: {
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 3,
    backgroundColor: Colors.light,
  },
  login: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary
  },
  SingupBtn: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 3,
    borderWidth: 4,
    borderColor: Colors.primary
  },
  signup: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light
  }
})