import React from "react";
import { View, Text, StyleSheet } from 'react-native'; 
import { FontTheme } from "../../theme/fontTheme";
import { Colors } from "../../theme/colorsTheme";
import Icon from "react-native-vector-icons/Ionicons";
import { Spaces } from "../../theme/spacing";

export function PlantDetailBody({plant}) {
 
  return (
    <View style={styles.bodyView}>
      <Text style={styles.heading3}>Featured</Text>
      <View style={styles.cardView}>
        <View style={styles.card}>
          <Icon name="rose-outline" style={styles.icon}/>
          <Text style={styles.title}>Care</Text>
          <Text style={styles.subTitle}>easy</Text>
        </View>
        <View style={styles.card}>
          <Icon name="water-outline" style={styles.icon}/>
          <Text style={styles.title}>Water</Text>
          <Text style={styles.subTitle}>once a week</Text>
        </View>
        <View style={styles.card}>
          <Icon name="sunny-outline" style={styles.icon}/>
          <Text style={styles.title}>Sun</Text>
          <Text style={styles.subTitle}>full sun</Text>
        </View>
      </View>
      <Text style={styles.body}>{plant.description}</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
  bodyView: {
    flex: 1,
    padding: Spaces.p1,
  },
  cardView: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: Spaces.m1
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Spaces.m1,
    padding: Spaces.p1,
    backgroundColor: Colors.light,
    borderRadius: 10
  },
  heading3: {
    fontSize: FontTheme.heading3,
    fontWeight: 'bold',
    color: Colors.light,
    borderBottomColor: Colors.light,
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    paddingBottom: Spaces.p1,
    paddingLeft: Spaces.p2,
    marginBottom: Spaces.m2
  },
  title: {
    fontSize: FontTheme.title,
    fontWeight: 'bold',
    color: Colors.primary
  },
  subTitle: {
    fontSize: FontTheme.subtitle,
    fontWeight: 'bold',
    backgroundColor: Colors.secondary,
    color: Colors.dark,
    padding: Spaces.p1,
    borderRadius: 5
  },
  icon: {
    fontSize: FontTheme.heading3,
    fontWeight: 'bold',
    color: Colors.primary
  },
  body: {
    fontSize: FontTheme.body,
    color: Colors.light,
    textAlign: 'justify',
    marginBottom: Spaces.m6
  },
})