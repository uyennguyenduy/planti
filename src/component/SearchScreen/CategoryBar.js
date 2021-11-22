import { iteratorSymbol } from 'immer/dist/internal';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { sortByCategory } from '../../redux/reducers/sortsSlice';

import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';

export function CategoryBar() {
  const categories = [ "Ferns", "Succulents", "Herbs", "Flowers"]
  const dispatch = useDispatch();
  
  return (
    <View style={styles.categoryBar}>
      
      <TouchableOpacity onPress={() => dispatch(sortByCategory(""))}>
        <Text  style={styles.title}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(sortByCategory("Ferns"))}>
        <Text  style={styles.title}>Ferns</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(sortByCategory("Succulents"))}>
        <Text  style={styles.title}>Succulents</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(sortByCategory("Herbs"))}>
        <Text  style={styles.title}>Herbs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(sortByCategory("Flowers"))}>
        <Text  style={styles.title}>Flowers</Text>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  categoryBar: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: FontTheme.subtitle,
    backgroundColor: Colors.primary,
    color: Colors.light,
    borderRadius: 10,
    marginRight: Spaces.m1,
    padding: Spaces.p1
  }
})