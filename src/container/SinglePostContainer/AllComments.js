import React from "react";
import { View, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";
import { selectAllComments } from "../../redux/reducers/commentsSlice";
import { CommentMedia } from "./CommentMedia";
import { Colors } from "../../theme/colorsTheme";
import { Spaces } from "../../theme/spacing";

export function AllComments({postId}) {

  const allComments = useSelector(selectAllComments);
  const targetedComments = allComments?.filter(comment => comment.postId === postId);

  return (
    <View style={styles.commentView}>
      {targetedComments?.map(comment => (
        
        <CommentMedia comment={comment} key={comment.id}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  commentView: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: Colors.primary,
    padding: Spaces.p2
  },
})