import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { useNavigation } from '@react-navigation/core';

export function PostsListFooter() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
 
      <TouchableOpacity
        onPress={() => nav.navigate("Posts")}
      >
        <Text>See More</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    borderRadius: 10,
    backgroundColor: Colors.primary,
    color: Colors.light,
    fontSize: FontTheme.heading1
  }
})