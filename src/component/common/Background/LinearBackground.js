
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export function LinearBackground({headerComponent, imgSource, bodyComponent}) {
  return ( 
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={imgSource}
        resizeMode="cover"
      > 
        {headerComponent}
        <LinearGradient 
          colors={['rgba(240, 255, 255, 0)', 'rgb(95, 158, 160)','rgb(0, 139, 139)' ]}
          locations={[0, 0.7, 1]}
          style={styles.linearBackground}
        > 
          {bodyComponent}
        </LinearGradient> 
      </ImageBackground>
    </ScrollView> 
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imgBackground: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  linearBackground: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  circleView: {
    position: 'absolute',
    top: -120,
    left: -30,
    width: 450,
    height: 450,
    borderRadius: 250,
    backgroundColor: 'rgba(0,0,0,0.3)',
  }
})
