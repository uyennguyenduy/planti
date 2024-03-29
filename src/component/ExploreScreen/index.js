import React, { useRef, useEffect } from 'react';
import { ScrollView, ImageBackground, StyleSheet, View, Text} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';
import { ExploreHeader } from './ExploreHeader';
import { LinearBackground } from '../common/Background/LinearBackground';
import { ExploreBody } from './ExploreBody';
import { useDispatch } from 'react-redux';
import { getPostsRequest } from '../../redux/actions/postsActions';
import { getPlantsRequest } from '../../redux/actions/plantsActions';


export function ExploreScreen({navigation}) {

  const dispatch = useDispatch();

  const ref = useRef();
  useScrollToTop(ref);
  
  useEffect(() => {
    dispatch(getPostsRequest())
    dispatch(getPlantsRequest())
  }, [dispatch]);

  return (
    <ScrollView style={styles.container} ref={ref}>
      <LinearBackground 
        headerComponent={<ExploreHeader/>}
        bodyComponent={<ExploreBody nav={navigation}/>}
        imgSource={require('../../assets/Images/bg-plant.jpg')}
      />
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