import React from 'react';
import { SearchHeader } from './SearchHeader';
import { SearchInput } from './SearchInput';
import { ScrollView, StyleSheet, View } from 'react-native';
import { AllPlants } from '../../container/SearchContainer/allPlants';
import { Colors } from '../../theme/colorsTheme';
import { CategoryBar } from './CategoryBar';

export function SearchScreen() {
  return (
    <ScrollView style={styles.container}>
      <SearchHeader />
      <SearchInput />
      <CategoryBar />
      <AllPlants />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.info
  }
})
