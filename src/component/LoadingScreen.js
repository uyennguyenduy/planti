import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export function LoadingScreen() {
  return (
    <View>
      <ActivityIndicator size="large"/>
    </View>
  )
}