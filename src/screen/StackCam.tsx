import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraCapture from "../screen_main/Camera"
import PinCreate from "../screen_main/CreatePin"
//import Auth from "./main/auth"
import { createStackNavigator } from "@react-navigation/stack";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import React, { useEffect, useRef, useState } from "react";

export default function camera_image() {
    const stack = createStackNavigator();
    const device = useCameraDevice("back");
    const camera = useRef<Camera>(null);

    return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="Camera">
          <stack.Screen name="Camera" options={{ headerShown: false }}>
            {() => (
              <CameraCapture
                navigation={navigator}
                device={device}
                camera={camera}
              />
            )}
          </stack.Screen>

          <stack.Screen
            name="Image"
            component={PinCreate}
            options={{ headerShown: false }}
          />
        </stack.Navigator>
      </NavigationContainer>
    );
}

    
