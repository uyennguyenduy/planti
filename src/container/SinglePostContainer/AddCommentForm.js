import { nanoid } from "@reduxjs/toolkit";
import React, { useContext, useState } from "react";
import { TextInput, Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { Spaces } from "../../theme/spacing";
import { Colors } from "../../theme/colorsTheme";
import { FontTheme } from "../../theme/fontTheme";
import { selectUserInfo } from "../../redux/reducers/authSlice";
import { addComment } from "../../redux/actions/commentsAction";



export const AddCommentForm = ({postId}) => {

  const [ comment, setComment ] = useState(' ');

  const dispatch = useDispatch();

  const userInfo = useSelector(selectUserInfo);

  const onAddComment = () => {
    if (comment) {
      dispatch(addComment({
        author: userInfo.email,
        userId: userInfo.userId,
        postId,
        content: comment
      }))
      setComment("");
    }
  }
  return (
    <View style={styles.container}>
      <Image 
        style={styles.userImg}
        source={require('../../assets/Images/user.png')}
      />
      <View style={styles.contentView}>
        <TextInput 
          style={styles.input}
          placeholder="Your comment"
          defaultValue={comment}
          onChangeText={(text) => setComment(text)}
          onEndEditing={() => onAddComment()}
        />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 100
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: Spaces.m1
  },
  contentView: {
    flex: 1,
    backgroundColor: Colors.muted,
    borderRadius: 10,
    marginLeft: Spaces.m1,
    padding: Spaces.p1
  },
  userImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.muted
  },
  title: {
    fontSize: FontTheme.title,
    fontWeight: 'bold',
    marginBottom: Spaces.m1
  },
  body: {
    fontSize: FontTheme.body
  },
  btn: {
    color: Colors.primary
  }
})