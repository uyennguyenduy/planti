
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../../App';
import { selectAllPlants } from '../../redux/reducers/plantsSlice';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';
import { PlantCard } from '../PlantCard';


export function Profile({route, navigation}) {

  const { state } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext).authContext;

  const allPlants = useSelector(selectAllPlants);
  const favoritePlants = allPlants.filter(item => item.featured === true);
  
  return ( 
    <View style={styles.container}>
      <ImageBackground
        style={styles.layout}
        source={require('../../assets/Images/bg-plant3.jpg')}
        resizeMode="cover"
      >
      <View style={styles.headerView}>
        <Text style={styles.heading3}>
          <Text style={{color: Colors.warning}}> {state.userName}</Text>
          {" "} Garden
        </Text>
  
        <TouchableOpacity
          onPress={() => signOut()}
        >
          <Text style={styles.logOutBtn}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.favoritePlantView}>
     
        {favoritePlants.map(plant => (
        <PlantCard plant={plant} key={plant.id} backgroundColor={Colors.primary}/>
      ))}
      </View> 
      </ImageBackground>
    </View> 
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    
  },
  layout: {
    flex: 1,
    padding: Spaces.p3
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: Spaces.m2,
    paddingBottom: Spaces.p1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.info
  },
  favoritePlantView: {
    flex: 1,
    padding: Spaces.p2,
    margin: Spaces.m1,
    borderRadius: 10,
    
  },
  heading3: {
    fontSize: FontTheme.heading3,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  logOutBtn: {
    backgroundColor: Colors.primary,
    color: Colors.light,
    fontSize: FontTheme.heading6,
    fontWeight: 'bold',
    padding: Spaces.p1,
    borderRadius: 10
  }
})
