import React, { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../../redux/reducers/postsSlice';
import { selectAllComments } from '../../redux/reducers/commentsSlice';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';
import { ReactButtons } from '../ReactionButtons';
import { AddCommentForm } from '../../container/CommentContainer/AddCommentForm';
import { AllComments } from '../../container/CommentContainer/AllComments';

export function SinglePost ({route, navigation}) {

  const { postId } = route.params;

  const allPosts = useSelector(selectAllPosts);
  const singlePost = allPosts.filter(item => item.id === postId)[0];
 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
          <Text>x</Text>
        </TouchableOpacity>
      )
    })
  })

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.heading1}>{singlePost.title}</Text>
        <Text style={styles.body}>{singlePost.content}</Text>
      </View>
      <View style={styles.reactionView}>
        <Text style={styles.reaction}>{singlePost.reaction}</Text>
        <ReactButtons 
          post={singlePost} 
          color={(singlePost.reaction <= 0) ? "gray" : "#008b8b"}
        />
      </View>
      <AllComments postId={postId}/>
      <AddCommentForm postId={postId} />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.info,
    padding: Spaces.p3,
  },
  reactionView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: Spaces.m1
  },
  heading1: {
    fontWeight: 'bold',
    fontSize: FontTheme.heading1,
    color: Colors.primary,
    marginBottom: Spaces.m2
    
  },
  body: {
    fontSize: FontTheme.body,
  },
  reaction: {
    fontSize: FontTheme.title,
    color: Colors.primary,
    fontWeight: 'bold',
    marginRight: Spaces.m1
  },
  
})