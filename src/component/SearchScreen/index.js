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
    <View style={styles.container}>
  
        <SearchHeader />
  
      <ScrollView style={styles.bodyView}>
        <AllPlants nav={nav}/>
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
 
  },
  bodyView: {
    flex: 2,
    paddingHorizontal: Spaces.p2
  }
})
