import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { AllPosts } from "../../container/AllPostsContainer/AllPosts";

export function AllPostsScreen({route}) {
  return (
    <ImageBackground
      source={require('../../assets/Images/bg-plant6.jpg')}
      resizeMode="cover"
      style={styles.allPostsView}
    >
      <AllPosts route={route}/>
    </ImageBackground>
    
   
  )
}

const styles = StyleSheet.create({
  allPostsView: {
    flex: 1,
  },
})