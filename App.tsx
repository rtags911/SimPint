
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {InitialStack,MainBottomNavigator,RootNavigator,SecStackNavigator} from './src/globalTypes/index'
import { QueryClient, QueryClientProvider } from "react-query";
import { NhostProvider } from "@nhost/react";
import nhost from "./src/apis/constNhost";
import Views from "./src/Main/screen/test"





export default function App() {
const queryClient = new QueryClient();  



  return (
   
      <QueryClientProvider client={queryClient}>
         <NhostProvider nhost={nhost}> 
            <NavigationContainer>
              <InitialStack />
            </NavigationContainer>
         </NhostProvider> 
         
         {/* TEST PROBLEM1 
         <Views />
          */}
      </QueryClientProvider>
    
  );
}
