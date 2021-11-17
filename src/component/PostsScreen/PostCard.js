import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';

export function PostCard({post, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.item}>
        <Image 
          style={styles.image}
          source={require('../../assets/Images/post1.jpg')}
          resizeMode='cover'
        />
        <Text style={styles.title}>{post.title}</Text>
      </View>
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
  item: {
    width: 180,
    backgroundColor: Colors.light,
    marginHorizontal: Spaces.m1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.muted
  },
  title: {
    fontSize: FontTheme.heading5,
    padding: Spaces.p1
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10 
  }
})