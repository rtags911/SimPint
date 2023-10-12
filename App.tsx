
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {InitialStack,MainBottomNavigator,RootNavigator,SecStackNavigator} from './src/globalTypes/index'
import { QueryClient, QueryClientProvider } from "react-query";
import { NhostProvider } from "@nhost/react";
import nhost from "./src/apis/constNhost";
import { UserLoginProvider } from "./src/apis/context";





export default function App() {
const queryClient = new QueryClient();  

  return (
   
      <QueryClientProvider client={queryClient}>
       <UserLoginProvider>
         <NhostProvider nhost={nhost}> 
            <NavigationContainer>
              <InitialStack />
            </NavigationContainer>
         </NhostProvider> 
         </UserLoginProvider>
      </QueryClientProvider>
    
  );
}
