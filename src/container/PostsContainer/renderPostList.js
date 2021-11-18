import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { selectLivingWithPlantsPosts, selectPlantCarePosts } from '../../redux/reducers/postsSlice';
import { PostsListFooter } from '../../component/PostsScreen/PostsListFooter';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Spaces } from '../../theme/spacing';
import { FontTheme } from '../../theme/fontTheme';
import { Colors } from '../../theme/colorsTheme';
import { useSelector } from 'react-redux';
import { PostCard } from '../../component/PostsScreen/PostCard';

export function RenderPostList({label}) {
  const nav = useNavigation();

  const plantCarePosts = useSelector(selectPlantCarePosts);
  const livingWithPlantsPosts = useSelector(selectLivingWithPlantsPosts);

  const targetedData = (label = 'Plant Care') ? plantCarePosts : 
    (label = 'Living With Plants') ? livingWithPlantsPosts : null

  const renderItem = ({item}) => (
    <PostCard 
    post={item}
    onPress={() => nav.navigate("SinglePost", {
      postId: item.id,
      title: item.title
    })}
    />
  )
  return (
    <View style={styles.plantCareView}>
      <View style={styles.navView}>
        <Text style={styles.heading5}>{label}</Text>
        <TouchableOpacity
          onPress={() => nav.navigate("AllPosts", {label: label})}
        >
          <Text style={styles.seeAllBtn}>See all</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList 
        data={targetedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={PostsListFooter}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  plantCareView: {
    padding: Spaces.p1,
    marginBottom: Spaces.m2
  },
  navView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: Spaces.m1,
    marginBottom: Spaces.m2
  },
  heading5: {
    fontSize: FontTheme.heading5,
    fontWeight: 'bold'
  },
  seeAllBtn: {
    fontSize: FontTheme.heading5,
    fontWeight: '500',
    color: Colors.primary
  }
})