import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
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
        placeholder="Type your favorite plant"
        defaultValue={searchTerm}
        onChangeText={(term) => handleChangeSearchTerm(term)}
        autoFocus
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.primary,
    color: Colors.light,
    padding: Spaces.p1,
  }
})