import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup, Welcome } from "../../Entry/index";
import MainBottomNav from "./main.bottmnav"
import nhost from "../../apis/constNhost";
import {useUserLogin} from '../../apis/context'


const InitialStack: React.FC = () => {
  const Stack = createStackNavigator();
  
const { userLoggedIn } = useUserLogin();
  // const { user } = useAuth();

  // const isLoggedIn = !!user;
  
  
  console.log("Entry", userLoggedIn);

    


  return (
    <Stack.Navigator>
      {!userLoggedIn ? (
        <>
        
          <Stack.Screen
            name="Home"
            component={MainBottomNav}
            options={{ headerShown: false }}
          />

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
        </>
      )}
    </Stack.Navigator>
  );
};

export default InitialStack;
