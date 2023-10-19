import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  InitialStack,
  MainBottomNavigator,
  RootNavigator,
  SecStackNavigator,
} from "./src/globalTypes/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { NhostProvider, useNhostClient } from "@nhost/react";
import nhost from "./src/apis/constNhost";
import Views from "./src/Main/screen/test";
import { useUserLogin, UserLoginProvider } from "./src/apis/context";
import LottieSplash from "./src/Splash/Splash";

export default function App() {
 
  const queryClient = new QueryClient();

  return   (
    <NhostProvider nhost={nhost}>
      <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <InitialStack />
          </NavigationContainer>
      </QueryClientProvider>
    </NhostProvider>

    // <Views/>

    //<LottieSplash/>
  );
}
