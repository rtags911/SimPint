import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Welcome, Signup, Homes } from "./src/screen";
import { NhostClient, NhostProvider } from "@nhost/react";
//import Auth from "./main/auth"
import { createStackNavigator } from "@react-navigation/stack";
import useAuthStore from "./src/apis/AuthStore";
import * as SecureStore from "expo-secure-store";
export default function App() {
  const stack = createStackNavigator();
  const authToken = useAuthStore((state:any) => state.authToken);

  
const REACT_APP_NHOST_SUBDOMAIN = "gimpimrhxygihhtbpuof";
const REACT_APP_NHOST_REGION = "eu-central-1";

const nhost = new NhostClient({
  subdomain: REACT_APP_NHOST_SUBDOMAIN,
  region: REACT_APP_NHOST_REGION,
  clientStorageType:"expo-secure-storage",
  clientStorage:SecureStore,
});


  return (
    <NhostProvider nhost={nhost}>
      <NavigationContainer>
        {authToken ? (
          <stack.Navigator>
            <stack.Screen
              name="Home"
              component={Homes}
              options={{ headerShown: false }}
            ></stack.Screen>
          </stack.Navigator>
        ) : (
          <stack.Navigator initialRouteName="Welcome">
            <stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            ></stack.Screen>

            <stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            ></stack.Screen>

            <stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            ></stack.Screen>
          </stack.Navigator>
        )}
      </NavigationContainer>
    </NhostProvider>

  );
}
