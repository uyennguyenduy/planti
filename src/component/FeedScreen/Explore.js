import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ScrollView, ImageBackground, TouchableOpacity, StyleSheet, View, Text, FlatList, Button} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { useScrollToTop } from '@react-navigation/native';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';
import { PostsListFooter } from '../PostsScreen/PostsListFooter';
import { selectPlantCarePosts, selectLivingWithPlantsPosts } from '../../redux/reducers/postsSlice';
import { PostCard } from '../PostsScreen/PostCard';
export function Explore() {

  const nav = useNavigation();

  const plantCarePosts = useSelector(selectPlantCarePosts);
  const livingWithPlantsPosts = useSelector(selectLivingWithPlantsPosts);
  
  const ref = useRef();

  const renderItem = ({item}) => (
    <PostCard 
    post={item}
    onPress={() => nav.navigate("SinglePost", {
      postId: item.id,
      title: item.title
    })}
    />
  )
     useScrollToTop(ref);
    /*useLayoutEffect(() => {
      nav.setOptions({
        headerRight: () => (
          <Button  title="Posts" onPress={() => nav.navigate("Posts")}/>
        )
      })
    })*/
 
    /*useEffect(() => {
      const unsubscribe = nav.addListener('focus', () => {
        
      });
      return ubsubscribe;
    }, [nav])*/
  return (
    <ScrollView style={styles.container} ref={ref}>
      <View style={styles.headerView}>
        <ImageBackground 
          style={[styles.img, {justifyContent: 'center'}]}
          source={require('../../assets/Images/bg-plant.jpg')}
          resizeMode="cover"
          blurRadius={2}
         
        >
          <Text style={styles.heading1}>
            EXPLORE {"\n"}
            <Text style={{fontWeight: '100'}}>Tips and Ideas</Text>
          </Text>
        </ImageBackground>
      </View>

      <View style={styles.plantCareView}>
        <View style={styles.navView}>
          <Text style={styles.heading5}>Plant Care</Text>
          <TouchableOpacity
            onPress={() => nav.navigate("AllPosts", {label: 'Plant Care'})}
          >
            <Text style={styles.seeAllBtn}>See all</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList 
          style={{alignSelf: 'stretch'}}
          data={plantCarePosts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={PostsListFooter}
        />
      </View>

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

      <View style={styles.livingPlantsView}>
        <View style={styles.navView}>
          <Text style={styles.heading5}>Living With Plants</Text>
          <TouchableOpacity
            onPress={() => nav.navigate("AllPosts", {label: 'Living With Plants'})}
          >
            <Text style={styles.seeAllBtn}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
          data={livingWithPlantsPosts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={PostsListFooter}
        />
      </View>

      <View style={styles.footerView}>
        <Text style={styles.heading4}>Follow us on social media!</Text>
        <Text style={styles.body}>Join PLANTI family to learn more about the world of plants 
          and grow your dream garden
        </Text>
        <View style={styles.logoView}>
          <Text>icon</Text>
        </View>
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.info,
    
  },
  headerView: {
    width: '100%',
    height: 350,
    marginBottom: Spaces.m2,
  },
  plantCareView: {
    padding: Spaces.p1,
    marginBottom: Spaces.m2
  },
  plantWeekView: {
    width: '100%',
    height: 450,
    marginBottom: Spaces.m2
  },
  livingPlantsView: {
    padding: Spaces.p1,
    marginBottom: Spaces.m2
  },
  footerView: {
    width: '50%',
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: Spaces.m2
  },
  logoView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: Spaces.m2
  },
  navView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: Spaces.m1,
    marginBottom: Spaces.m2
  },
  heading1: {
    padding: Spaces.p1,
    fontSize: FontTheme.heading1,
    fontWeight: 'bold',
    borderWidth: 3,
    borderColor: Colors.secondary,
    borderRadius: 5,
    textAlign: 'center',
    color: Colors.secondary
  },
  heading4: {
    fontSize: FontTheme.heading4,
    fontWeight: 'bold'
  },
  heading5: {
    fontSize: FontTheme.heading5,
    fontWeight: 'bold'
  },
  body: {
    fontSize: FontTheme.body,
    color: Colors.primary
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
  seeAllBtn: {
    fontSize: FontTheme.heading5,
    fontWeight: '500',
    color: Colors.primary
  },
  img: {
   flex: 1,
   justifyContent: 'flex-end',
   padding: Spaces.p2
  },
  icon: {
    borderRadius: 15,
    backgroundColor: Colors.warning,
    padding: Spaces.p1,
    fontSize: FontTheme.heading1,
    color: Colors.light
  }
})