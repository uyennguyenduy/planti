import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../theme/colorsTheme";
import { FontTheme } from "../../theme/fontTheme";
import { Spaces } from "../../theme/spacing";

export function SearchHeader() {
  return (
    <View>
      <Text style={styles.heading}>
        Find Your <Text style={{color: Colors.warning}}>Perfect</Text> Plants
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  searchHeaderView: {
    flex: 1,
    marginBottom: Spaces.m2
  },
  heading: {
    fontSize: FontTheme.heading4,
    color: Colors.info,
    fontWeight: 'bold'
  }
})