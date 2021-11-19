import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from "react-redux";
import { PlantCard } from "../../component/PlantCard";
import { selectAllPlants, selectFilteredPlant } from "../../redux/reducers/plantsSlice";

export function AllPlants({nav}) {


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
        <TouchableOpacity
          key={plant.id}
          onPress={() => nav.navigate("PlantDetail", {
            plantId: plant.id
          })}
        >
          <PlantCard plant={plant} />
        </TouchableOpacity>
        
      ))}
    </View>
  )
}