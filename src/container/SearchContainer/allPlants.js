import React from "react";
import { View } from 'react-native';
import { useSelector } from "react-redux";
import { PlantCard } from "../../component/PlantCard";
import { selectAllPlants, selectFilteredPlant } from "../../redux/reducers/plantsSlice";

export function AllPlants() {

  const plants = useSelector(selectFilteredPlant);
  if (!plants) {
    return (
      <View>
        <Text>No found</Text>
      </View>
    )
  }
  return (
    <View>
      {plants.map(plant => (
        <PlantCard plant={plant} key={plant.id}/>
      ))}
    </View>
  )
}