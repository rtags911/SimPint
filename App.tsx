
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NhostClient, NhostProvider } from "@nhost/react";
//import Auth from "./main/auth"
import { createStackNavigator } from "@react-navigation/stack";

import React, { useEffect, useRef, useState } from "react";
import nhost from './src/apis/constNhost';
import {InitialStack,MainBottomNavigator,RootNavigator,SecStackNavigator} from './src/globalTypes/index'

export default function App() {

  return (
    <NhostProvider nhost={nhost}>
      <NavigationContainer>
        <InitialStack />
      </NavigationContainer>
    </NhostProvider>
  );
}
