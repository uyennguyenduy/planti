import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';

export function PostsListFooter() {
  const nav = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => nav.navigate("AllPosts")}
        style={styles.container}
      >
        <Icon name="arrow-forward-outline" style={styles.icon}/>
        <Text style={styles.btn}>
          
          See More
        </Text>
      </TouchableOpacity>
      
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 50,
    height: 50,
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: Colors.light,
    color: Colors.primary,
    fontSize: FontTheme.heading1
  }, 
  btn: {
    fontSize: FontTheme.title,
    fontWeight: 'bold',
    color: Colors.light
  }

})