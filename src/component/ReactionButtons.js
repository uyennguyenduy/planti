import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import { useDispatch } from "react-redux";
import { reactionAdded } from "../redux/reducers/postsSlice";

export function ReactButtons({post, color}) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(reactionAdded({postId: post.id}))}
    >
      <Icon name="heart-sharp" size={24} color={color}/>
    </TouchableOpacity>
  )
}