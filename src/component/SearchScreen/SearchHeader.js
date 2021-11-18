import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontTheme } from "../../theme/fontTheme";

export function SearchHeader() {
  return (
    <View>
      <Text style={styles.heading}>Find Your Perfect Plants</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  searchHeaderView: {
    flex: 1,
  },
  heading: {
    fontSize: FontTheme.heading4,
  }
})