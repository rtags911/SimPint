import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import {CameraCapture,ModalCamImage,PinHome,PinProfile} from "../../Main/index"

import Ionicons from "@expo/vector-icons/Ionicons";

import nhost from "../../apis/constNhost";

const MainBottomNav:React.FC = () => {
  const Tabs = createBottomTabNavigator();
  const Stack = createStackNavigator();
  console.log('TBD',nhost);
    const Gallery = () => {
      return null;
    };
      const size1 = 35;
        return (
         
            <Tabs.Navigator
              initialRouteName="PinHome"
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
              <Tabs.Screen
                name="PinHome"
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
              />

              <Tabs.Screen
                name="Camera"
                component={Gallery}
                options={{
                  tabBarButton: () => <ModalCamImage />,
                }}
              />

              <Tabs.Screen
                name="Profile"
                component={PinProfile}
                options={{
                  title: "Profile",
                  tabBarIcon: ({ focused }) => (
                    <Ionicons
                      name="person-circle"
                      size={size1}
                      style={{ color: focused ? "#e32f45" : "#7423" }}
                    />
                  ),
                }}
              />
            </Tabs.Navigator>
          
        );


}
export default MainBottomNav;