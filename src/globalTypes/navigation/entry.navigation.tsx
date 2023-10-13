import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup, Welcome} from "../../Entry/index";
import { PinScreen } from "../../Main/index";
import MainBottomNav from "./main.bottmnav"
// import {useUserLogin} from '../../apis/context'
import {useAuthenticationStatus, useNhostClient} from "@nhost/react";

import PinCreateScreen from '../../Main/screen/CreatePin'
const InitialStack: React.FC = () => {
  const Stack = createStackNavigator();
  
    const {isAuthenticated} = useAuthenticationStatus();
  // const { user } = useAuth();

  // const isLoggedIn = !!user;
  
  console.log("Entry1", isAuthenticated);

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={MainBottomNav}
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
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PinScreen"
            component={PinScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="CreatePinScreen"
            component={PinCreateScreen}
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
          {/* main BOTTOM NAV */}
          <Stack.Screen
            name="Home"
            component={MainBottomNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PinScreen"
            component={PinScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreatePinScreen"
            component={PinCreateScreen}
            options={{ headerShown: false }}
          />


        </>
      )}
    </Stack.Navigator>
  );
};

export default InitialStack;
