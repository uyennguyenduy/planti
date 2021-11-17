import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { selectAllPosts } from "../../redux/reducers/postsSlice";
import { PostCard } from "./PostCard";

export function PostsList({route}) {

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
    <View style={styles.container}>
 
      <FlatList 
        data={targetedPosts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{marginBottom: 20}}
        initialNumToRender={5}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150
  },
})