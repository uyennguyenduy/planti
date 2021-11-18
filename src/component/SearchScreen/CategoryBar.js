import { iteratorSymbol } from 'immer/dist/internal';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';

export function CategoryBar() {
  const categories = [ "Ferns", "Succulents", "Herbs", "Flowers"]
  
  return (
    <View style={styles.categoryBar}>
      { categories.map((category, id )=> (
        <Text key={id} style={styles.title}>
          {category}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  categoryBar: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: FontTheme.title,
    backgroundColor: Colors.primary,
    color: Colors.light,
    borderRadius: 10,
    marginHorizontal: Spaces.m1
  }
})