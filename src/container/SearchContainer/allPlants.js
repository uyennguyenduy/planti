import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from "react-redux";
import { PlantCard } from "../../component/common/Card/PlantCard";
import { selectAllPlants, selectFilteredPlant } from "../../redux/reducers/plantsSlice";
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from "../../theme/colorsTheme";
import { FontTheme } from "../../theme/fontTheme";

export function AllPlants({nav}) {

  const { isLoading } = useSelector(state => state.plants);
  const plants = useSelector(selectFilteredPlant);

  if (!plants) {
    return (
      <View>
        <Text>Not found</Text>
      </View>
    )
  }
  if (isLoading) {
    return <ActivityIndicator size="large" />
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
          <PlantCard plant={plant}>
            <Icon name="chevron-forward-sharp" style={styles.icon}/>
          </PlantCard>
        </TouchableOpacity>
        
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    color: Colors.secondary,
    fontSize: FontTheme.heading4,
    fontWeight: 'bold',
  }
})