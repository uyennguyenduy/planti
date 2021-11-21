import React from 'react';
import { ScrollView, ImageBackground, StyleSheet, View, Text} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';
import { ExploreFooter } from './ExploreFooter';
import { RenderPost } from '../../container/ExploreContainer/renderPost';

export function ExploreBody() {
  return (
    <View style={styles.exploreBodyView}>
      <RenderPost label="Plant Care"/>

      <View style={styles.plantWeekView}>
        <ImageBackground 
          style={styles.img}
          source={require('../../assets/Images/plant3.jpg')}
          resizeMode="cover"
        >
          <Text style={styles.title}>Plant of Week</Text>
          <Text style={styles.subtitle}>MOSTERA PLANT</Text>
        </ImageBackground>
      </View>

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
    height: 450,
    marginBottom: Spaces.m2,
  },
  title: {
    width: '50%',
    padding: Spaces.p1,
    textAlign: 'center',
    fontSize: FontTheme.title,
    fontWeight: 'bold',
    backgroundColor: Colors.warning,
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