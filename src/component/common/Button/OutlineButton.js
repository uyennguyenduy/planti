import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors } from '../../../theme/colorsTheme';
import { FontTheme } from '../../../theme/fontTheme';
import { Spaces } from '../../../theme/spacing';

export function OutlineButton({onPress, button, color}) {
  const customStyle = {
    borderColor: color,
    color: color
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
    borderWidth: 3,
    borderColor: Colors.primary,
    color: Colors.primary
  }
})