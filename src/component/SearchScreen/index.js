import React from 'react';
import { SearchHeader } from './SearchHeader';
import { SearchInput } from './SearchInput';
import { ScrollView, StyleSheet, View } from 'react-native';
import { AllPlants } from '../../container/SearchContainer/allPlants';
import { Colors } from '../../theme/colorsTheme';
import { CategoryBar } from './CategoryBar';
import { useNavigation } from '@react-navigation/core';
import { Spaces } from '../../theme/spacing';

export function SearchScreen() {

  const nav = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <SearchHeader />
      <SearchInput />
      <CategoryBar />
      <AllPlants nav={nav}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    padding: Spaces.p2,
  }
})
