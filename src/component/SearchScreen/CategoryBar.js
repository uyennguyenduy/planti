import { iteratorSymbol } from 'immer/dist/internal';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { sortByCategory } from '../../redux/reducers/plantsSlice';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';

export function CategoryBar() {
  const categories = [ "Ferns", "Succulents", "Herbs", "Flowers"]
  const dispatch = useDispatch();
  
  return (
    <View style={styles.categoryBar}>
      { categories.map((category, id )=> (
        <TouchableOpacity
          key={id}
          onPress={(category) => dispatch(sortByCategory(category))}
        >
          <Text  style={styles.title}>
            {category}
          </Text>
        </TouchableOpacity>
        
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