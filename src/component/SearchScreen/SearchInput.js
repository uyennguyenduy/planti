import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../theme/colorsTheme";
import { useDispatch, useSelector } from "react-redux";
import { Spaces } from "../../theme/spacing";
import { selectSearchTerm, setSearchTerm } from "../../redux/reducers/searchTermSlice";

export function SearchInput() {
  
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleChangeSearchTerm = (term) => dispatch(setSearchTerm(term));
  return (
    <View>
      
      <TextInput 
        style={styles.input}
        placeholder="Find your favorite plant"
        defaultValue={searchTerm}
        onChangeText={(term) => handleChangeSearchTerm(term)}
        autoFocus
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.info,
    color: Colors.primary,
    padding: Spaces.p1,
    borderRadius: 10,
    marginBottom: Spaces.m2
  }
})