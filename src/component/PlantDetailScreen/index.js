import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, TouchableOpacity, Text, StyleSheet, Button, ScrollView } from "react-native";
import { PlantDetails } from "./PlantDetails";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../theme/colorsTheme";
import { Spaces } from "../../theme/spacing";
import { ReactButtons } from "../ReactionButtons";
import { FontTheme } from "../../theme/fontTheme";


export function PlantDetailScreen({route, navigation}) {


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.jumpTo("Search")}
        >
          <Icon name="close" size={35} color="white"/>
        </TouchableOpacity>
      )
    })
  })
  
  
  return (
    <ScrollView style={styles.container}>
      <PlantDetails route={route}/>
      
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  navView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backBtn: {
    fontSize: FontTheme.title,
    fontWeight: 'bold',
    color: Colors.primary
  },
  addGardenBtn: {
    backgroundColor: Colors.primary,
    fontSize: FontTheme.subtitle,
    fontWeight: 'bold',
    color: Colors.light,
    borderRadius: 10,
    padding: Spaces.p1
  }
})