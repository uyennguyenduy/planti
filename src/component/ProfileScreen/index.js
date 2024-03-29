
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { ProfileBody } from './ProfileBody';
import { ProfileHeader } from './ProfileHeader';
import LinearGradient from 'react-native-linear-gradient';

export function ProfileScreen({navigation}) {
  return ( 
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.screenBackground}
        source={require('../../assets/Images/bg-plant.jpg')}
        resizeMode="cover"
      > 
        <ProfileHeader/>
        <LinearGradient 
          colors={['rgba(240, 255, 255,0)', 'rgb(95, 158, 160)','rgba(0, 139, 139, 1)' ]}
          locations={[0.1, 0.5, 1]}
        > 
          <ProfileBody nav={navigation}/>
        </LinearGradient> 
      </ImageBackground>
    </ScrollView> 
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenBackground: {
    flex: 1,
  
  },
})
