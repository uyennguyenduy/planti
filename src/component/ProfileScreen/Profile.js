
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, SafeAreaView, TouchableOpacity, Pressable, TouchableHighlight, ImageBackground} from 'react-native';
import { AuthContext } from '../../../App';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';


export function Profile({route, navigation}) {

  const { state } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext).authContext;

  return (
   
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.heading3}>Hello
          <Text style={{color: Colors.warning}}> {state.userName}</Text>
        </Text>
        
        <TouchableOpacity
          onPress={() => signOut()}
        >
          <Text style={styles.logOutBtn}>Log Out</Text>
        </TouchableOpacity>
      </View>

    </View> 
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.info
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40
  },
  heading3: {
    fontSize: FontTheme.heading3,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  logOutBtn: {
    backgroundColor: Colors.primary,
    color: Colors.light,
    fontSize: FontTheme.heading6,
    fontWeight: 'bold',
    padding: Spaces.p1,
    borderRadius: 10
  }
})
