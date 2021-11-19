
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../../theme/colorsTheme";
import { FontTheme } from "../../theme/fontTheme";

import { SinglePost } from "../../component/AllPostsScreen/SinglePost";

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
          headerTransparent: false,
          headerStyle: {
            backgroundColor: Colors.info,
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
            headerTransparent: false,
            headerStyle: {
              backgroundColor: Colors.info,
            }   
          }}

        />
      </Stack.Group>
      
    </Stack.Navigator>
  )
}