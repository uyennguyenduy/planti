import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { RenderPostCard } from "../../container/PostsContainer/renderPostCard";

export function AllPostsScreen({route, navigation}) {
  return (
    <>
      <RenderPostCard route={route}/>
    </>
    
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})