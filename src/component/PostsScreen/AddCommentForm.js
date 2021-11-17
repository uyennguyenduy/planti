import AsyncStorage from "@react-native-async-storage/async-storage";
import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Image } from 'react-native';
import { useDispatch } from "react-redux";
import { commentAdded } from "../../redux/reducers/commentsSlice";
import { Spaces } from "../../theme/spacing";
import { Colors } from "../../theme/colorsTheme";
import { FontTheme } from "../../theme/fontTheme";
export const AddCommentForm = ({postId}) => {
  const [ comment, setComment ] = useState(' ')
  const dispatch = useDispatch();

  const onAddComment = () => {
    if (comment) {
      dispatch(commentAdded({
        id: nanoid(),
        userId: 1,
        postId: postId,
        content: comment
      }))
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
          placeholderTextColor="black"
          placeholder="Your comment"
          defaultValue={comment}
          onChangeText={(text) => setComment(text)}
        />
        <Button title="Add Comment" 
           onPress={() => onAddComment()}
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
    width: '100%',
    backgroundColor: Colors.secondary,
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
  }
})