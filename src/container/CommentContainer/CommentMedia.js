import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';
import { USERS } from "../../assets/data/USERS";
import { Colors } from "../../theme/colorsTheme";
import { Spaces } from "../../theme/spacing";
import { FontTheme } from "../../theme/fontTheme";

export function CommentMedia({comment}) {
  const author = USERS.filter(item => item.id === comment.userId)[0];
  return (
    <View style={styles.comment}>
      <Image 
        style={styles.userImg}
        source={require('../../assets/Images/user.png')}
      />
      <View style={styles.contentView}>
        <Text style={styles.title}>{author.username.toLocaleUpperCase()}</Text>
        <Text style={styles.body}> {comment.content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  comment: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: Spaces.m1
  },
  contentView: {
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