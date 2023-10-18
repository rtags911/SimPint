import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup, Welcome } from "../../Entry/index";
import { PinScreen } from "../../Main/index";
import MainBottomNav from "./main.bottmnav";
import { useState } from "react";
import { useUserLogin } from "../../apis/context";
import { useAuthenticated, } from "@nhost/react";
import PinCreateScreen from "../../Main/screen/CreatePin";
import LottieSplash from "../../Splash/Splash";

const InitialStack: React.FC = () => {
  const Stack = createStackNavigator();

  const test = useAuthenticated();
  console.log("Entry1", test);

  const [auth, setAuth] = useState(test);
  const [isLoadingScreen, setLoadingScreen] = useState(true);
  // const { userLoggedIn } = useUserLogin();

 
  useEffect(() => {
    // Simulate an asynchronous check of authentication status
    
    setTimeout(() => {
      setLoadingScreen(false);
     // Set isLoadingScreen to false after the check is done
    }, 5000); // Adjust the delay time as needed
  }, []);



  console.log("Entry2", auth);


  

  return isLoadingScreen? (<LottieSplash/>):(
    <Stack.Navigator>
      {test ? (
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
        </>
      )}
    </Stack.Navigator>
  );
};

export default InitialStack;
