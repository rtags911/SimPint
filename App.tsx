
import { NavigationContainer } from "@react-navigation/native";
import { NhostProvider } from "@nhost/react";
import React, { useEffect, useRef, useState } from "react";
import {nhost} from './src/apis/constNhost';
import {InitialStack,MainBottomNavigator,RootNavigator,SecStackNavigator} from './src/globalTypes/index'
import { AuthProvider } from "./src/apis/useAuthContext"; 
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
const queryClient = new QueryClient();  
  return (
    <QueryClientProvider client={queryClient}>
      <NhostProvider nhost={nhost}>
        <AuthProvider>
          <NavigationContainer>
            <InitialStack />
          </NavigationContainer>
        </AuthProvider>
      </NhostProvider>
    </QueryClientProvider>
  );
}
