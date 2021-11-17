import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";
import { reactionAdded } from "../redux/reducers/postsSlice";

export function ReactButtons({post, color}) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(reactionAdded({postId: post.id}))}
    >
      <Text>Like</Text>
    </TouchableOpacity>
  )
}