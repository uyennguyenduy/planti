
import React, { useState } from 'react';
import {  View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../../../theme/loginStyles';
import { RecoveryForm } from './RecoveryForm';

export function RecoveryScreen({navigation}) {
  

  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Images/bg-plant.jpg')}
        resizeMode='cover'
        style={styles.layout}
      >
        <View>
          <Text style={styles.heading}>Password Recovery</Text>
        </View>
        
        <RecoveryForm nav={navigation}/>

        <View style={styles.footer}>
          <Text style={styles.textBody}>
            @PLANT COMUNITY
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}


