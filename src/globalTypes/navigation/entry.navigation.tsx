import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Login,Signup,Welcome}from "../../Entry/index";
import useAuthStore from "../../apis/AuthStore";
import MainBottomNav from "./main.bottmnav";

    const Stack = createStackNavigator();
  const authToken = useAuthStore((state:any) => state.authToken);



const InitialStack:React.FC = () => {
        return (
          <Stack.Navigator initialRouteName="Welcome">
            {authToken ? (
              <>
                //bottom navigation
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

