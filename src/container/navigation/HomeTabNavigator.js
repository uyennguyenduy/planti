import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FeedStackNavigator } from '../navigation/FeedStackNavigator';
import { Profile } from '../../component/ProfileScreen/Profile';




const Tab = createBottomTabNavigator();

export function HomeTabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown: true,
        /*tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "Feed") {
            iconName = focused ? "flower" : "flower-outline"
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.muted*/
        })
      }
    >
        <Tab.Screen 
        name="Feed" 
        component={FeedStackNavigator}
        
      />
        <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            title: 'My Garden'
          }}  
        />
    </Tab.Navigator>
  )
}