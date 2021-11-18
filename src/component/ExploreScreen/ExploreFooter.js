import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';


export function ExploreFooter() {
  return (
    <View style={styles.footerView}>
      <Text style={styles.heading4}>Follow us on social media!</Text>
      <Text style={styles.body}>Join PLANTI family to learn more about the world of plants 
          and grow your dream garden
      </Text>
      <View style={styles.logoView}>
        <Text>icon</Text>
      </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  footerView: {
    width: '50%',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: Spaces.m2
  },
  logoView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: Spaces.m2
  },
  heading4: {
    fontSize: FontTheme.heading4,
    fontWeight: 'bold'
  },
  body: {
    fontSize: FontTheme.body,
    color: Colors.primary
  },
})