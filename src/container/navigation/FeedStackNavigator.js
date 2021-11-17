
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../../theme/colorsTheme";
import { FontTheme } from "../../theme/fontTheme";
import { Explore } from "../../component/FeedScreen/Explore";
import { PostsList } from "../../component/PostsScreen/PostsList";
import { SinglePost } from "../../component/PostsScreen/SinglePost";

const Stack = createNativeStackNavigator();

export const FeedStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Explore" 
        component={Explore}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="AllPosts" component={PostsList}
        options={({route}) => ({
          title: route.params.label,
          headerTitleStyle: {
            fontSize: FontTheme.heading1,
            fontWeight: 'bold',
            color: Colors.primary
          },
          headerTransparent: true,
          headerStyle: {
            borderBottomWidth: 0,
          },
          headerTintColor: Colors.primary
        })}
      />
      <Stack.Group screenOptions={{ presentation: 'modal'}}>
        <Stack.Screen name="SinglePost" 
          component={SinglePost}
          options={{
            title: " ",
            headerBackVisible: false,
            headerTransparent: false,   
          }}

        />
      </Stack.Group>
      
    </Stack.Navigator>
  )
}