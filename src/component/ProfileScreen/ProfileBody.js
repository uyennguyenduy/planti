
import React from 'react';
import { View, StyleSheet, Text, ScrollView} from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { Spaces } from '../../theme/spacing';
import { FavoritePlants } from './FavoritePlants';
import { FontTheme } from '../../theme/fontTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export function ProfileBody({nav}) {
 
  return ( 
    <View style={styles.profileBodyView}> 
      <Text style={styles.heading}>
        <Icon name="flower-sharp" size={24}/>{" "}
        My garden
      </Text>
      <FavoritePlants nav={nav}/>
      <Text style={styles.heading}>
        <Icon name="document-sharp" size={24}/>{" "}
        My Posts
      </Text>
    </View> 
 
  )
}

const styles = StyleSheet.create({
  profileBodyView: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: Spaces.p2,
    paddingTop: Spaces.m4,
    paddingBottom: 200,
  },
  circleView: {
    position: 'absolute',
    top: -380,
    left: -30,
    width: 450,
    height: 450,
    borderRadius: 250,
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 1
  },
  heading: {
    fontSize: FontTheme.heading4,
    color: Colors.info,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    borderColor: Colors.info,
    paddingBottom: Spaces.p1, 
  },

})
