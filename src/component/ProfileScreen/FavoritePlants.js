
import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavoritePlant, selectAllPlants } from '../../redux/reducers/plantsSlice';
import { Colors } from '../../theme/colorsTheme';
import { Spaces } from '../../theme/spacing';
import { FontTheme } from '../../theme/fontTheme';
import { PlantCard } from '../common/Card/PlantCard';
import Icon from 'react-native-vector-icons/Ionicons';

export function FavoritePlants({nav}) {

  const dispatch = useDispatch();

  const allPlants = useSelector(selectAllPlants);
  const favoritePlants = allPlants.filter(item => item.featured === true);
 
  return ( 
    <>
      {favoritePlants.map(plant => (
        <TouchableOpacity 
          style={styles.plantCardView} 
          key={plant.id}
          onPress={() => nav.navigate("PlantDetail", {
            plantId: plant.id
          })}
        >
          <PlantCard plant={plant}>
            <TouchableOpacity
              onPress={() => dispatch(deleteFavoritePlant({id: plant.id}))}
            >
              <Icon name="close-sharp" style={styles.icon}/>
            </TouchableOpacity>
            
          </PlantCard>
        </TouchableOpacity>  
      ))}
    </> 
  )
}

const styles = StyleSheet.create({
  plantCardView: {
    height: 150,
    borderRadius: 10,
    marginVertical: Spaces.m1
  },
  icon: {
    color: Colors.secondary,
    fontSize: FontTheme.heading4,
    fontWeight: 'bold'
  }
})
