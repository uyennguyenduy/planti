import React from "react";
import { View, Image, Text, StyleSheet, BackHandler } from "react-native";
import plantsSlice from "../redux/reducers/plantsSlice";
import { Colors } from "../theme/colorsTheme";
import { FontTheme } from "../theme/fontTheme";
import { Spaces } from "../theme/spacing";
import Icon from 'react-native-vector-icons/Ionicons';

export function PlantCard({plant, backgroundColor}) {
  return (
    <View style={[styles.plantCard, {backgroundColor}]}>
      <Image 
        style={styles.img}
        source={require('../assets/Images/plant1.jpg')}
        resizeMode="cover"
      />
      <View style={styles.plantCardBody}>
        <Text style={styles.title}>{plant.name}</Text>
        <Text style={styles.subTitle}>{plant.description}</Text>
      </View>
      <Icon name="chevron-forward-sharp" style={styles.title}/>
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
    fontSize: FontTheme.title,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: FontTheme.subtitle,
    color: Colors.info,
    paddingVertical: Spaces.p1
  }
})