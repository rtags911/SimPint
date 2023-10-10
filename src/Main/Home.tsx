import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {CameraCapture,ModalCamImage,PinHome,PinProfile} from './index';

import Ionicons from "@expo/vector-icons/Ionicons";
import * as React from "react";


const Homes = () => {
  const Gallery = () => {
    return null;
  };
  const Tab = createBottomTabNavigator();
  const size1 = 35;

  return (
    <Tab.Navigator
      initialRouteName="WelcomeHome"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: -5,
          padding: 10,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name="WelcomeHome"
        component={PinHome}
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
          tabBarButton: () => <ModalCamImage />,
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Profile"
        component={PinProfile}
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
