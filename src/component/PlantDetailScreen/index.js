import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import { SinglePlant } from "./SinglePlant";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../theme/colorsTheme";
import { Spaces } from "../../theme/spacing";
import { ReactButtons } from "../ReactionButtons";
import { FontTheme } from "../../theme/fontTheme";


export function PlantDetailScreen({route, navigation}) {

/*
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
        >
          <Icon name="close" size={35} color="black"/>
        </TouchableOpacity>
      )
    })
  })
  */
  
  return (
    <View style={styles.container}>
      <SinglePlant route={route}/>
      <View style={styles.navView}>
        
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
        <Text style={styles.backBtn}>
        <Icon name="chevron-back-sharp" size={25} color='black'/> 
          Back
        </Text>
        </TouchableOpacity>
     
        
      
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.info,
    padding: Spaces.p3
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