import React from 'react';
import { ImageBackground, StyleSheet, View, Text} from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';


export function ExploreHeader() {
  return (
    <View style={styles.headerView}>
      <ImageBackground 
        style={[styles.img, {justifyContent: 'center'}]}
        source={require('../../assets/Images/bg-plant.jpg')}
        resizeMode="cover"
        blurRadius={2}
         
      >
        <Text style={styles.heading1}>
          EXPLORE {"\n"}
          <Text style={{fontWeight: '100'}}>Tips and Ideas</Text>
        </Text>
      </ImageBackground>
      </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    width: '100%',
    height: 350,
    marginBottom: Spaces.m2,
  },
  heading1: {
    padding: Spaces.p1,
    fontSize: FontTheme.heading1,
    fontWeight: 'bold',
    borderWidth: 3,
    borderColor: Colors.secondary,
    borderRadius: 5,
    textAlign: 'center',
    color: Colors.secondary
  },
  img: {
   flex: 1,
   justifyContent: 'flex-end',
   padding: Spaces.p2
  },
})