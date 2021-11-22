import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors } from '../../../theme/colorsTheme';
import { FontTheme } from '../../../theme/fontTheme';
import { Spaces } from '../../../theme/spacing';

export function FilledeButton({onPress, button, color}) {
  const customStyle = {
    backgroundColor: color
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.button, customStyle]}>{button}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: FontTheme.title,
    fontWeight: 'bold',
    padding: Spaces.p1,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    color: Colors.light
  }
})