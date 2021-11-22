import React from "react";
import { View, Image, Text, StyleSheet, BackHandler } from "react-native";
import { Colors } from "../../../theme/colorsTheme";
import { FontTheme } from "../../../theme/fontTheme";
import { Spaces } from "../../../theme/spacing";



export function PlantCard({plant, children}) {
  return (
    <View style={styles.plantCard}>
      <Image 
        style={styles.img}
        source={require('../../../assets/Images/plant1.jpg')}
        resizeMode="cover"
      />
      <View style={styles.plantCardBody}>
        <Text style={styles.title}>{plant.name}</Text>
        <Text style={styles.subTitle}>{plant.description}</Text>
      </View>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  plantCard: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: Spaces.m1,
    borderBottomWidth: 1,
    borderColor: Colors.info,
  },
  plantCardBody: {
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: Spaces.m1
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 10
  },
  title: {
    color: Colors.secondary,
    fontSize: FontTheme.heading4,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: FontTheme.subtitle,
    color: Colors.info,
    paddingVertical: Spaces.p1
  }
})