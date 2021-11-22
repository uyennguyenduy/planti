import React, { useState } from 'react';
import {  Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPlants, setFavoritePlant } from '../../redux/reducers/plantsSlice';
import { Colors } from '../../theme/colorsTheme';
import { Spaces } from '../../theme/spacing';
import { FontTheme } from '../../theme/fontTheme';
import Icon from "react-native-vector-icons/Ionicons";
import { PlantDetailBody } from './PlantDetailBody';

export function PlantDetails({route}) {
  
  const { plantId } = route.params;
  const dispatch = useDispatch();
  const plants = useSelector(selectAllPlants);

  const targetedPlant = plants.filter(plant => plant.id === plantId)[0];
  const iconColor = (targetedPlant.featured) ? true : false;

  const onAddFavoritePlant = () => {
    dispatch(
      setFavoritePlant({id: plantId})
    );
  };
  return (
    <View style={styles.container}>
      
      <View style={styles.headerView}>
        <Text style={styles.heading1}>{targetedPlant.name}</Text>
        <View style={styles.headerLayout}></View>

        <Image 
          source={require("../../assets/Images/plant1.jpg")}
          style={styles.plantImg}
        />
        <TouchableOpacity
          onPress={onAddFavoritePlant}
        >
          <Text style={styles.addGardenBtn}>
            Add To My Garden {"   "}
            <View style={styles.iconView}>
              <Icon name="heart-sharp" 
              style={[styles.icon, { color: iconColor ? '#ffa07a':'gray'}]}
            />
            </View>
        </Text>
        </TouchableOpacity>
      </View>
      
      <PlantDetailBody plant={targetedPlant}/>
       
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Spaces.m6
  },
  headerView: {
    flex: 1,
    height: 450,
    marginBottom: Spaces.m6
  },
  plantImg: {
    position: 'absolute',
    top: 80,
    left: 0,
    width: '90%',
    height: '80%',
    borderRadius: 20
  },
  headerLayout: {
    width: '90%',
    height: '80%',
    position: 'absolute',
    top: 150,
    right: 0,
    backgroundColor: Colors.warning,
    borderRadius: 20
  },
  heading1: {
    fontWeight: 'bold',
    fontSize: FontTheme.heading1,
    color: Colors.light,
    paddingHorizontal: Spaces.m2
  },
  addGardenBtn: {
    position: 'absolute',
    top: 370,
    left: 140,
    width: '100%',
    fontSize: FontTheme.title,
    fontWeight: 'bold',
    color: Colors.light,
  },
  iconView: {
    borderRadius: 100,
    backgroundColor: Colors.light,
    padding: Spaces.p2,
  },
  icon: {
    fontSize: FontTheme.heading4,
 
  }
})