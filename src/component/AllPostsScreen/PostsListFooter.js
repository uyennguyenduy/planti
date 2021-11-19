import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';

export function PostsListFooter() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
 
      <TouchableOpacity
        onPress={() => nav.navigate("AllPosts")}
      >
        <Icon name="arrow-forward-outline" style={styles.icon}/>
        <Text style={styles.btn}>
          
          See More
        </Text>
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
    width: 50,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    color: Colors.light,
    fontSize: FontTheme.heading1
  }, 
  btn: {
    fontSize: FontTheme.title,
    fontWeight: 'bold',
    color: Colors.primary
  }

})