import React from 'react';
import {  Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPlants, setFavoritePlant } from '../../redux/reducers/plantsSlice';
import { Colors } from '../../theme/colorsTheme';
import { Spaces } from '../../theme/spacing';
import { FontTheme } from '../../theme/fontTheme';
import Icon from "react-native-vector-icons/Ionicons";

export function SinglePlant({route}) {

  const { plantId } = route.params;
  const dispatch = useDispatch();
  const plants = useSelector(selectAllPlants);

  const targetedPlant = plants.filter(plant => plant.id === plantId)[0];
  const onAddFavoritePlant = () => {
    dispatch(
      setFavoritePlant({id: plantId})
    )
  };
  return (
    <View>
      <Text style={styles.heading1}>{targetedPlant.name}</Text>
      <TouchableOpacity
        onPress={onAddFavoritePlant}
      >
          <Text style={styles.addGardenBtn}>
            Add to my garden
            <Icon name="heart-sharp" size={25} color={Colors} />
        </Text>
        </TouchableOpacity>
      <Text style={styles.body}>{targetedPlant.description}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  reactionView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: Spaces.m1
  },
  heading1: {
    fontWeight: 'bold',
    fontSize: FontTheme.heading1,
    color: Colors.primary,
    marginBottom: Spaces.m2
    
  },
  body: {
    fontSize: FontTheme.body,
    color: Colors.dark,
    textAlign: 'justify'
  },
  reaction: {
    fontSize: FontTheme.title,
    color: Colors.dark,
    fontWeight: 'bold',
    marginRight: Spaces.m1
  },
  addGardenBtn: {
    width: '50%',
    backgroundColor: Colors.primary,
    fontSize: FontTheme.subtitle,
    fontWeight: 'bold',
    color: Colors.light,
    borderRadius: 10,
    padding: Spaces.p1
  }
})