import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export function Loading() {
  return (
    <View>
      <ActivityIndicator size="large"/>
    </View>
  )
}