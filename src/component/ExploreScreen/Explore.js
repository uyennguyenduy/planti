import React, { useRef } from 'react';
import { ScrollView, ImageBackground, StyleSheet, View, Text} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';
import { ExploreHeader } from '../ExploreScreen/ExploreHeader';
import { ExploreFooter } from '../ExploreScreen/ExploreFooter';
import { RenderPostList } from '../../container/PostsContainer/renderPostList';

export function Explore() {

  const ref = useRef();
  useScrollToTop(ref);
  
  return (
    <ScrollView style={styles.container} ref={ref}>
      <ExploreHeader />
      <RenderPostList label="Plant Care"/>

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

      <RenderPostList label="Living With Plants"/>
      <ExploreFooter />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.info,
  },
  plantWeekView: {
    width: '100%',
    height: 450,
    marginBottom: Spaces.m2
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
   padding: Spaces.p2
  },
})