import React, { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../../redux/reducers/postsSlice';
import { selectAllComments } from '../../redux/reducers/commentsSlice';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { Spaces } from '../../theme/spacing';
import { ReactButtons } from '../common/Button/ReactionButtons';
import { AddCommentForm } from '../../container/SinglePostContainer/AddCommentForm';
import { AllComments } from '../../container/SinglePostContainer/AllComments';


export function SinglePostBody ({route}) {

  const { postId } = route.params;

  const { isLoading } = useSelector(state => state.comments)
  const allComments = useSelector(selectAllComments);
  const allPosts = useSelector(selectAllPosts);

  const singlePost = allPosts.filter(post => post.id === postId)[0];
  const singlePostComments = allComments?.filter(item => item.postId === "FJOelorivL0iDbXpJSkS");
  
  return (
    <>
      <View>
        <Text style={styles.heading1}>{singlePost.title}</Text>
        <Text style={styles.subtitle}>{singlePost.author}</Text>
        <Text style={styles.body}>{singlePost.content}</Text>
      </View>
      <View style={styles.reactionView}>
        <Text style={styles.reaction}>{singlePost.reaction}</Text>
        <ReactButtons 
          post={singlePost} 
          color={(singlePost.reaction <= 0) ? "gray" : Colors.warning}
        />
        <Text style={[styles.reaction, {marginLeft: 180}]}>
          {singlePostComments?.length} comments
        </Text>
      </View>
      { isLoading ? <ActivityIndicator size="large"/>
        : <AllComments postId={postId}/>
      }
      <AddCommentForm postId={postId} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    padding: Spaces.p3,
    marginTop: 100,
    borderRadius: 50
  },
  reactionView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: Spaces.m1
  },
  heading1: {
    fontWeight: 'bold',
    fontSize: FontTheme.heading1,
    color: Colors.primary,
    marginBottom: Spaces.m2
    
  },
  subtitle: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: FontTheme.heading4,
    color: Colors.primary,
    marginBottom: Spaces.m2
  },
  body: {
    fontSize: FontTheme.body,
    color: Colors.dark,
    textAlign: 'justify'
  },
  reaction: {
    fontSize: FontTheme.title,
    color: Colors.dark,
    fontWeight: 'bold',
    marginRight: Spaces.m1
  },
  
})