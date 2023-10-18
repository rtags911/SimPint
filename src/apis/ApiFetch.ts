import { useNhostClient, useAuthenticationStatus } from "@nhost/react";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthService from './useAuthContext';
export const FetchUserStatus = async () => {
  const nhost = useNhostClient();
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const [loggedin, setLoggedin] = useState(""); // Initialize to null


  const user = await AuthService.getCurrentUser();
  const isLoggedIn = await AuthService.isLoggedIn();
  const getJwt = await AuthService.getJwt();
  // console.log(getJwt);

  if (isLoggedIn && user) {
    console.log("API FETCH",user);
    return user;
  }

    if (isLoggedIn && user) {
      return user;
    }

     return loggedin;
};
