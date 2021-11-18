import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { RenderPostCard } from "../../container/PostsContainer/renderPostCard";

export function AllPosts({route}) {
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