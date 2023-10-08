import { View, Text, TouchableOpacity, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home1 from "../screen_main/Fhome";
import Prof from "../screen_main/FProf";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
import { useState } from "react";
import * as React from "react";
import  GalleryAdd  from "../screen_main/GalleryAdd";






const Homes = ({props}:any) => {
  const Gallery = () => {
    return null;
  };

  const size1 = 35;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          padding: 10,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        
      
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home1}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={size1}
              style={{ color: focused ? "#e32f45" : "#7423" }}
            />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Picture"
        component={Gallery}
        options={{
          tabBarButton: () => (<GalleryAdd/>),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={Prof}
        options={{
          title: "prof",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-circle"
              size={size1}
              style={{ color: focused ? "#e32f45" : "#7423" }}
            />
          ),
        }}
      ></Tab.Screen>
      
    </Tab.Navigator>
  );
};

export default Homes;
