import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import plantsSlice from "../redux/reducers/plantsSlice";
import { FontTheme } from "../theme/fontTheme";

export function PlantCard({plant}) {
  return (
    <View style={styles.plantCard}>
      <Image 
        style={styles.img}
        source={require('../assets/Images/plant1.jpg')}
        resizeMode="cover"
      />
      <View style={styles.plantCardBody}>
        <Text style={styles.title}>{plant.name}</Text>
        <Text style={styles.subTitle}>{plant.description}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  plantCard: {
    flex: 1,
    flexDirection: 'row'
  },
  plantCardBody: {
    flex: 1,
    justifyContent: 'space-around'
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  title: {
    fontSize: FontTheme.title,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: FontTheme.subtitle
  }
})