
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../../theme/colorsTheme";
import { FontTheme } from "../../theme/fontTheme";

import { SinglePost } from "../../component/SinglePostScreen";

import { ExploreScreen } from "../../component/ExploreScreen";
import { AllPostsScreen } from "../../component/AllPostsScreen";



const Stack = createNativeStackNavigator();

export const FeedStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Explore" 
        component={ExploreScreen}
        options={{
          title: "Exlore",
          headerShown: false
        }}
      />
      <Stack.Screen name="AllPosts" component={AllPostsScreen}
        options={({route}) => ({
          title: route.params.label,
          headerTitleStyle: {
            fontSize: FontTheme.heading1,
            fontWeight: 'bold',
            color: Colors.dark,
          },
          headerStyle: {
            backgroundColor: Colors.light
          },
          headerTintColor: Colors.dark
        })}
      />
      <Stack.Group screenOptions={{ presentation: 'modal'}}>
        <Stack.Screen name="SinglePost" 
          component={SinglePost}
          options={{
            title: " ",
            headerBackVisible: false,
            headerTransparent: true
          }}

        />
      </Stack.Group>
      
    </Stack.Navigator>
  )
}