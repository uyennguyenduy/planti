import React from 'react';
import { ImageBackground, StyleSheet, View, Text} from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';


export function ExploreHeader() {
  return (
    <View style={styles.headerView}>
      <Text style={styles.heading1}>
         EXPLORE {"\n"}
        <Text style={{fontWeight: '100'}}>Tips and Ideas</Text>
      </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spaces.p4
  },
  heading1: {
    padding: Spaces.p1,
    fontSize: FontTheme.heading1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.light,
    borderBottomWidth: 3,
    borderColor: Colors.light,
    borderStyle: 'dashed'
  },
  img: {
   flex: 1,
   justifyContent: 'flex-end',
   padding: Spaces.p2
  },
})