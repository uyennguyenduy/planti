import React, { useLayoutEffect } from 'react';
import Iconicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity, StyleSheet, ImageBackground, View } from 'react-native';
import { SinglePostBody } from './SinglePostBody';
import { Colors } from '../../theme/colorsTheme';
import { Spaces } from '../../theme/spacing';

export function SinglePost({route, navigation}) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
          <Iconicons name="close" size={35} color={Colors.light}/>
        </TouchableOpacity>
      )
    })
  })

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={require('../../assets/Images/post1.jpg')}
      > 
        <View style={styles.bodyView}>
          <SinglePostBody route={route}/>
        </View>
      </ImageBackground>
    </ScrollView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imgBackground: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  bodyView: {
    flex: 1,
    backgroundColor: Colors.info,
    padding: Spaces.p3,
    marginTop: 150,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
})
