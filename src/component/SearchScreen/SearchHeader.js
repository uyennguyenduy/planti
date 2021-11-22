import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Colors } from "../../theme/colorsTheme";
import { FontTheme } from "../../theme/fontTheme";
import { Spaces } from "../../theme/spacing";
import { CategoryBar } from "./CategoryBar";
import { SearchInput } from "./SearchInput";

export function SearchHeader() {
  return (
    <View
   
      style={styles.searchHeaderView}
    >
      <Text style={styles.heading}>
        Find Your <Text style={{color: Colors.warning}}>Perfect</Text> Plants
      </Text>
      <SearchInput/>
      <CategoryBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  searchHeaderView: {
    flex: 0.4,
    justifyContent: 'center',
    padding: Spaces.p2,
    backgroundColor: Colors.secondary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  heading: {
    fontSize: FontTheme.heading3,
    color: Colors.primary,
    fontWeight: 'bold',
    marginBottom: Spaces.m2
  }
})