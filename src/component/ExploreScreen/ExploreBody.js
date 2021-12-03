import React from 'react';
import { ScrollView, ImageBackground, StyleSheet, View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';
import { ExploreFooter } from './ExploreFooter';
import { RenderPost } from '../../container/ExploreContainer/renderPost';
import { useSelector } from 'react-redux';
import { selectAllPlants, selectRandomPlant } from '../../redux/reducers/plantsSlice';
import { getRandomplant } from '../../utils/randomPlant';


export function ExploreBody({nav}) {
  
  const { isLoading } = useSelector(state => state.plants);
  const randomPlant = useSelector(selectRandomPlant);

  return (
    <View style={styles.exploreBodyView}>

      <RenderPost label="Plant Care"/>
        { isLoading ? <ActivityIndicator size="large"/> :
        <TouchableOpacity
          onPress={() => nav.navigate("PlantDetail", {
            plantId: randomPlant?.id
          })}
          style={styles.plantWeekView}
        >
          <ImageBackground 
            style={styles.img}
            source={require('../../assets/Images/plant3.jpg')}
            resizeMode="contain"
          >
            <Text style={styles.title}>{randomPlant?.name}</Text>
            {/*<Text style={styles.subtitle}>{randomPlant.name}</Text>*/}
          </ImageBackground>
        </TouchableOpacity>
        }
      <RenderPost label="Living With Plants"/>
      <ExploreFooter />
    </View>
  )
}

const styles = StyleSheet.create({
  exploreBodyView: {
    flex: 2,
  },
  plantWeekView: {
    width: '100%',
    height: 350,
    marginBottom: Spaces.m1,
  },
  title: {
    width: '50%',
    padding: Spaces.p1,
    textAlign: 'center',
    fontSize: FontTheme.title,
    fontWeight: 'bold',
    backgroundColor: Colors.warning,
    color: Colors.light,
    borderRadius: 10
  },
  subtitle: {
    width: '50%',
    textAlign: 'center',
    fontSize: FontTheme.subtitle,
    fontWeight: 'bold',
    color: Colors.light
  },
  img: {
   flex: 1,
   justifyContent: 'flex-end',
   padding: Spaces.p2,
  },
})