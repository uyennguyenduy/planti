import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function ExploreFooter() {
  return (
    <View style={styles.footerView}>
      <Text style={styles.heading4}>Follow us on social media!</Text>
      <Text style={styles.body}>Join PLANTI family to learn more about the world of plants 
          and grow your dream garden
      </Text>
      <View style={styles.logoView}>
        <Ionicons style={styles.icon} name="logo-facebook"/>
        <Ionicons style={styles.icon} name="logo-instagram"/>
        <Ionicons style={styles.icon} name="logo-pinterest"/>
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  footerView: {
    width: '80%',
    alignSelf: 'center',
    
    marginBottom: Spaces.m2
  },
  logoView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: Spaces.m2
  },
  heading4: {
    fontSize: FontTheme.heading4,
    color: Colors.dark,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    fontSize: FontTheme.body,
    color: Colors.primary,
    textAlign: 'center',
  },
  icon: {
    backgroundColor: Colors.warning,
    color: Colors.light,
    padding: Spaces.p2,
    borderRadius: 15,
    fontSize: FontTheme.title,
    fontWeight: 'bold',
    marginHorizontal: Spaces.m1
  }
})