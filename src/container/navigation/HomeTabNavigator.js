import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FeedStackNavigator } from '../navigation/FeedStackNavigator';
import { SearchScreen } from '../../component/SearchScreen';
import { PlantDetailScreen } from '../../component/PlantDetailScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../theme/colorsTheme';
import { FontTheme } from '../../theme/fontTheme';
import { ProfileScreen } from '../../component/ProfileScreen';



const Tab = createBottomTabNavigator();

export function HomeTabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: FontTheme.heading6
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "Feed") {
            iconName = focused ? "flower" : "flower-outline"
          } else if (route.name === "Search") {
            iconName = focused ? "search-circle" : "search-circle-outline" 
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray'
        })
      }
    >
        <Tab.Screen 
        name="Feed" 
        component={FeedStackNavigator}
        options={{
          title: "Explore"
        }}
      
      />
        <Tab.Screen 
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            title: 'My Garden'
          }}  
        />
        <Tab.Group screenOptions={{ presentation: "modal"}}>
          <Tab.Screen name="PlantDetail" 
            component={PlantDetailScreen}
            options={({route}) => ({
              title: '',
              headerShown: true,
              headerTransparent: true,
              tabBarButton: (props) => null,
              
            })}
        />
        </Tab.Group>
        
        

    </Tab.Navigator>
  )
}