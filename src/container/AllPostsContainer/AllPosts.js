import React from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { selectAllPosts, selectPostsState } from "../../redux/reducers/postsSlice";
import { PostCard } from "../../component/common/Card/PostCard";
import { Colors } from "../../theme/colorsTheme";
import { isLandscape } from "react-native-device-info";

export function AllPosts({route}) {

  const nav = useNavigation();
  const { label } = route.params;

  const posts = useSelector(selectAllPosts);
  const targetedPosts = posts.filter(post => post.label === label);

  const renderItem = ({item}) => (
    <PostCard 
    post={item}
    onPress={() => nav.navigate("SinglePost", {
      postId: item.id,
      title: item.title
    })}
    />)
 
  return (
    <FlatList 
      style={styles.container}
      data={targetedPosts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={{marginBottom: 20}}
      initialNumToRender={5}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
})