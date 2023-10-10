import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Login,Signup,Welcome}from "../../Entry/index";
import MainBottomNav from "./main.bottmnav";
import { useAuth } from "../../apis/useAuthContext";

const InitialStack:React.FC = () => {
   const Stack = createStackNavigator();
  const { user } = useAuth();



   const isLoggedIn = !!user;


        return (
          <Stack.Navigator initialRouteName="Welcome">
            {isLoggedIn ? (
              <>
                <Stack.Screen
                  name="Home"
                  component={MainBottomNav}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Welcome"
                  component={Welcome}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Signup"
                  component={Signup}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Home"
                  component={MainBottomNav}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </Stack.Navigator>
        );
}


export default InitialStack;

