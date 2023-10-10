import React, { useEffect, useRef, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { CameraCapture } from "../../Main/index";


const Camera_ImageStackNavigator:React.FC = () => {
      const device = useCameraDevice("back");
      const camera = useRef<Camera>(null);
      const PinCreate = () => {
            return null;
      }
    return (
      <Stack.Navigator initialRouteName="Camera">
        <Stack.Screen name="Camera" options={{ headerShown: false }}>
          {() => (
            <CameraCapture/>
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Image"
          component={PinCreate}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
}

export default Camera_ImageStackNavigator;